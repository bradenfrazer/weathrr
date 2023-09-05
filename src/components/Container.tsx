interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

export const Container = ({ children, className }: ContainerProps) => {
    return (
        <div className={`sm:h-full sm:justify-center sm:items-center sm:flex sm:flex-col sm:gap-4 p-4 sm:p-8 ${className ? className : ""}`}>
            {children}
        </div>
    )
}