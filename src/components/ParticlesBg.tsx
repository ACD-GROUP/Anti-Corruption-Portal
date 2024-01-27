'use client'

import Particles, { initParticlesEngine, IParticlesProps } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim";
import { IOptions, RecursivePartial } from "@tsparticles/engine";

export default function ParticlesBg(props: IParticlesProps) {
    const [init, setInit] = useState(false);

    // this should be run only once per application lifetime
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const options: RecursivePartial<IOptions> = useMemo(
        () => ({
            background: {
                color: {
                    value: '#FFFFFF',
                },
            },
            fullScreen: false,
            fpsLimit: 120,
            particles: {
                color: {
                    value: "#0d6efd",
                },
                links: {
                    color: "#0d6efd",
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: true,
                    speed: 0.5,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                    },
                    value: 100,
                },
                opacity: {
                    value: 0.75,
                },
                shape: {
                    type: "polygon",
                },
                size: {
                    value: { min: 1, max: 3 },
                },
            },
            detectRetina: true,
        }),
        [],
    );

    return (
        <Particles {...props} options={options} />
    )
}