export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1>Hello</h1>
      <div>{children}</div>
      <h1>Hello</h1>
    </div>
  );
}
