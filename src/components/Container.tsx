interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div
      className={`p-8 md:flex md:h-full md:flex-col md:items-center md:justify-center md:p-12 ${
        className ? className : ""
      }`}
    >
      {children}
    </div>
  );
};
