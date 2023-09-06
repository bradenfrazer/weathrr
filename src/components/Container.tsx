interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div
      className={`flex flex-col p-8 md:h-full md:items-center md:justify-center md:p-12 ${
        className ? className : ""
      }`}
    >
      {children}
    </div>
  );
};
