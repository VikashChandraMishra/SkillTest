export const BaseEdge = ({
  path,
  testId,
}: {
  path: string;
  testId?: string;
}) => {
  return (
    <>
      <path
        data-testid={testId}
        d={path}
        fill="none"
        strokeWidth={1}
        stroke="#fcfcfc"
      />
    </>
  );
};