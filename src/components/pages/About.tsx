const About = () => {
    return (
        <section className="max-w-5xl mx-auto px-6 py-12" style={{ color: '#FFFFF0' }}>
            <div className="mb-10">
                <h1 className="text-3xl md:text-4xl font-bold mb-3">About Me</h1>
                <p className="text-lg text-zinc-300 max-w-3xl">
                    I’m Jacob, a full-stack developer with a passion for creating responsive web applications and intuitive user interfaces. My journey started in game development, but I quickly found a home in full-stack work — where logic, design, and interaction all collide.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-6">
                    <p>
                        I enjoy turning abstract ideas into elegant solutions — whether that means refining a React UI, wiring up a database, or figuring out how to make something just a bit more intuitive for users.
                    </p>
                    <p>
                        Lately I’ve been building a lot with Firebase and Tailwind, while also diving deeper into Java, Spring Boot, and cloud architecture.
                    </p>
                    <p>
                        Outside of work, I love fantasy writing, strategy games, and tinkering with creative coding experiments.
                    </p>
                </div>

                <div className="space-y-4">
                    <h2 className="text-xl font-semibold" style={{ color: '#38bdf8' }}>What I Work With</h2>
                    <ul className="space-y-2">
                        <li className="border-l-4 pl-4" style={{ color: '#38bdf8' }}>
                            <span className="font-medium">Frontend:</span> React, Tailwind CSS, ShadCN, TypeScript
                        </li>
                        <li className="border-l-4 pl-4" style={{ color: '#38bdf8' }}>
                            <span className="font-medium">Backend:</span> Java, Firebase, Node.js, MySQL
                        </li>
                        <li className="border-l-4 pl-4" style={{ color: '#38bdf8' }}>
                            <span className="font-medium">Tools:</span> Git, Vite, Figma, VS Code
                        </li>
                        <li className="border-l-4 pl-4" style={{ color: '#38bdf8' }}>
                            <span className="font-medium">Currently Learning:</span> Spring Boot, Cloud Functions, Next.js
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default About;
