export default function NotFound() {
  return (
    <div
      sx={{
        bg: "#106faa",
        color: "#fff",
        py: [8],
        pl: [5, null, 8, "20vw"],
        pr: [5, null, 4, 0],
        minHeight: "100vh",
      }}
    >
      <div sx={{ maxWidth: [null, null, 700] }}>
        <h1 sx={{ fontSize: [120, null, 150], mb: 4 }}>:(</h1>
        <p sx={{ fontSize: [20, null, 24], mb: 4 }}>
          This website ran into a problem and your request could not be done. The identified error info is as below:
        </p>
        <p sx={{ fontSize: [20, null, 24], mb: 6 }}>404: Page Not Found</p>
        <p sx={{ lineHeight: 1.6 }}>
          If the error info above is strange to you somehow, you may raise an issue at
          https://github.com/khang-nd/khang-nd.github.io/issues
        </p>
      </div>
    </div>
  );
}
