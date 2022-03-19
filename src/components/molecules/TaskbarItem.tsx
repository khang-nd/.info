type TaskbarItemProps = {
  title?: string;
};

export default function TaskbarItem({ title }: TaskbarItemProps): JSX.Element {
  return <>{title}</>;
}
