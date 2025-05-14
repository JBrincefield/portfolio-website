export default function Resume() {
  return (
    <section className="text-[#FAFFEB] px-6 md:px-12">
  <h2 className="text-3xl font-bold mb-4 " style={{ color: "#ED7E07" }}>Summary</h2>
  <p className="mb-8">
    I'm a Computer Science student at Neumont College of Computer Science with a strong foundation in modern development practices. I enjoy working with tools like React, TypeScript, Spring Boot, and Unity, and gained real-world experience through an IT internship with the City of Tacoma. I'm driven by curiosity and a passion for building clean, interactive applications.
  </p>

  

  <div className="mb-8">
    <h2 className="text-2xl font-semibold mb-2 " style={{ color: "#ED7E07" }}>Industry Experience</h2>
    <p className="font-medium">IT Helper Intern – City of Tacoma (2021)</p>
    <ul className="list-disc list-inside pl-4">
      <li>Shadowed IT personnel and supported daily operations</li>
      <li>Organized technical documentation and learned enterprise ticketing systems</li>
    </ul>
  </div>

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

  <div className="mb-8">
    <h2 className="text-2xl font-semibold mb-2 " style={{ color: "#ED7E07" }}>Education</h2>
    <p>High School Diploma, Graduated: 2023 Industrial Design, Engineering and Art (IDEA) GPA 3.5</p>
    <p>B.S. in Computer Science – Neumont College of Computer Science (Expected 2026) GPA 3.81</p>
  </div>

  <div>
    <h2 className="text-2xl font-semibold mb-2 " style={{ color: "#ED7E07" }}>Activities/Awards</h2>
    <ul className="list-disc list-inside pl-4">
      <li>Volunteered in elementary schools via IDEA programs, assisting teachers with classroom duties</li>
      <li>Participated in FTC Robotics (2016–2019) with Stewart Robotics Team; Team received Gracious Professionalism Award</li>
      <li>Salmon Ambassadors (2023): Maintained classroom aquariums to support salmon release projects and educated students on ecosystems.</li>
    </ul>
  </div>

  <div className="mt-8 text-center">
  <a
    href="/resume.pdf"
    download
    className="inline-block bg-transparent text-[#ED7E07] font-semibold py-2 px-4 border border-[#ED7E07] rounded hover:bg-[#ED7E07] hover:text-[#202C39] transition-colors duration-200"
  >
    Download Resume
  </a>
</div>
</section>
  );
}
