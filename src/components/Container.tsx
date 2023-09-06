interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div
      className={`p-4 sm:flex sm:h-full sm:flex-col sm:items-center sm:justify-center sm:gap-4 sm:p-8 ${
        className ? className : ""
      }`}
    >
      {children}
    </div>
  );
};
