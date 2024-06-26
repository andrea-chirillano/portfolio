import React, { ReactNode } from "react";
import { cn } from "../../../utils/cn";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
    children: ReactNode;
    showRadialGradient?: boolean;
}

export const AuroraBackground: React.FC<AuroraBackgroundProps> = ({
    className,
    children,
    showRadialGradient = true,
    ...props
}) => {
    return (
        <main className="w-full">
            <div
                className={cn(
                    "relative flex flex-col h-[100vh] w-[100vw] items-center justify-center transition-bg",
                    className
                )}
                {...props}
            >
                {/* Capa para el fondo */}
                <div
                    className="absolute inset-0 w-full h-full overflow-hidden"
                    style={{ opacity: 0.7 }} // Establecer la opacidad del fondo
                >
                    <div
                        className={cn(
                            `
                            [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)]
                            [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)]
                            [--aurora:repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--indigo-300)_15%,var(--blue-300)_20%,var(--violet-200)_25%,var(--blue-400)_30%)]
                            [background-image:var(--white-gradient),var(--aurora)]
                            dark:[background-image:var(--dark-gradient),var(--aurora)]
                            [background-size:300%,_200%]
                            [background-position:50%_50%,50%_50%]
                            filter blur-[10px] invert dark:invert-0
                            after:content-[""] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] 
                            after:dark:[background-image:var(--dark-gradient),var(--aurora)]
                            after:[background-size:200%,_100%] 
                            after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference
                            pointer-events-none
                            absolute -inset-[10px] opacity-50`,
                            showRadialGradient &&
                            `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`
                        )}
                    ></div>
                </div>
                {/* Capa para las auroras */}
                <div className="relative flex flex-col h-full w-full items-center justify-center">
                    {children}
                </div>
            </div>
        </main>
    );
};
