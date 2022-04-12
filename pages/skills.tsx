import { motion } from "framer-motion";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { Box, ThemeUICSSObject } from "theme-ui";
import { List } from "../src/components/atoms/Container";
import Window from "../src/components/molecules/Window";
import Layout from "../src/components/pages/Layout";
import CategoryButton from "../src/components/pages/skills/CategoryButton";
import SkillButton from "../src/components/pages/skills/SkillButton";
import { GlobalContext } from "../src/contexts/GlobalContext";
import skills from "../src/data/skills";
import { getRoute } from "../src/misc/routes";

export default function Skills(): JSX.Element {
  const { asPath } = useRouter();
  const { reduceMotion } = useContext(GlobalContext);
  const [filters, setFilters] = useState<string[]>([]);
  const [filteredSkills, setFilteredSkills] = useState(skills);
  const helpText = `This is a non-exhaustive list of technical stuffs that I pretend to know,
  either by having used them in work or in my side projects, of any scale.`;

  const listStyle: ThemeUICSSObject = {
    display: "grid",
    gridTemplateColumns: ["repeat(3, 1fr)", null, "repeat(4, 1fr)", "repeat(5, 1fr)"],
    rowGap: 6,
  };

  const categoryStyle: ThemeUICSSObject = {
    px: [null, null, 4],
    mb: 4,
    display: ["grid", null, "flex"],
    gridTemplateColumns: "1fr 1fr",
    justifyContent: "center",
  };

  const uniqueCategories = new Set(skills.map((skill) => skill.category).filter((category) => !!category));
  const categories = [...Array.from(uniqueCategories), "Misc"] as string[];

  const handleClick = (category: string) => () => {
    const index = filters.indexOf(category);
    const _filters = filters.slice(0);
    if (index > -1) {
      _filters.splice(index, 1);
    } else {
      _filters.push(category);
    }
    setFilters(_filters);
  };

  useEffect(() => {
    if (filters.length) {
      const filterResult = skills.filter((skill) => filters.includes(skill.category || "Misc"));
      setFilteredSkills(filterResult);
    } else {
      setFilteredSkills(skills);
    }
  }, [filters]);

  return (
    <Window title={getRoute(asPath)?.title} help={helpText}>
      <Box sx={categoryStyle}>
        {categories.map((category) => (
          <CategoryButton key={category} onClick={handleClick(category)} isActive={filters.includes(category)}>
            {category}
          </CategoryButton>
        ))}
      </Box>
      <Box sx={{ py: 4, px: [null, null, 6], minHeight: 400 }}>
        <List sx={listStyle}>
          {filteredSkills.map((skill) => (
            <motion.li layout={!reduceMotion.val} key={skill.name}>
              <SkillButton skill={skill} />
            </motion.li>
          ))}
        </List>
      </Box>
    </Window>
  );
}

Skills.getLayout = (page: JSX.Element) => <Layout>{page}</Layout>;
