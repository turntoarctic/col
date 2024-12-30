export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full w-full flex-1 p-2">{children} </div>
  );
};
