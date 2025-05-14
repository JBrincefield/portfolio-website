export default function About() {
    return (
        <section className="text-white p-6">
            <h2 className="text-3xl font-bold mb-4">About <span className="text-accent">Me</span></h2>
            <p className="text-secondary mb-4">
                I am a student of Computer Science at Neumont College of Computer Science with a strong 
                foundation in software development. I enjoy creating modern, interactive web applications 
                using technologies like React, TypeScript, and Spring Boot, and am also knowledgeable about 
                Java, C#, and Unity. My past internship with the City of Tacoma IT department gave me hands-on 
                experience with enterprise systems, and I'm always looking for ways to continue to grow as a 
                developer through innovation and collaboration.
            </p>

            <div className="mb-8">
    <h2 className="text-2xl font-semibold mb-3" style={{ color: "#ED7E07" }}>Skills</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {[
            "Java", "C#", "JavaScript", "HTML", "React", "TypeScript", "Spring Boot", "ShadCN",
            "Socket.io", "SQL/NoSQL", "Unity", "GitHub", "Postman"
        ].map((skill) => (
            <span
            key={skill}
            className="px-3 py-1 rounded text-sm font-medium bg-[#22577A] text-[#FAFFEB] hover:bg-[#ED7E07] hover:text-black transition-colors duration-200"
            >
            {skill}
            </span>
        ))}
        </div>
    </div>
        </section>
    );
}