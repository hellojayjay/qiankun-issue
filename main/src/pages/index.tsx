import { Link } from 'umi';

export default function IndexPage({ children }: any) {
  return (
    <div>
      <h1>Main</h1>
      <Link to="/">跳转home</Link>
      &nbsp;
      <Link to="/app1">跳转app1</Link>
      &nbsp;
      <Link to="/app2">跳转app2</Link>
      &nbsp;
      <div>{children}</div>
    </div>
  );
}
