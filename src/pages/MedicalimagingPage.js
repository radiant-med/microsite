import React from 'react';
import './MedicalImagingPage.css'; // Import CSS file

const MedicalImagingPage = () => {
  const teamMembers = [
    { name: 'Antoni Kobyłecki', role: 'Project Manager', imageUrl: '/teamMember1.png' },
    { name: 'Maksymilian Cieślak', role: 'Lead Developer', imageUrl: '/teamMember1.png' },
    { name: 'Mateusz Wyciszkiewicz', role: 'UI/UX Designer', imageUrl: '/teamMember1.png' },
    { name: 'Artur Denderski', role: 'Backend Developer', imageUrl: '/teamMember1.png' },
    { name: 'Mateusz Kubiak', role: 'Quality Assurance Engineer', imageUrl: '/teamMember1.png' }
  ];

  const milestones = [
    { title: 'Milestone 1: Planning', description: 'Kickoff meeting and project setup', deadline: 'March 15, 2024' },
    { title: 'Milestone 2: Architecture', description: 'Completion of UI/UX designs', deadline: 'April 10, 2024' },
    { title: 'Milestone 3: Prototype', description: 'Development of backend functionalities', deadline: 'May 20, 2024' },
    { title: 'Milestone 4: Final Product', description: 'Implementation of frontend components', deadline: 'June 30, 2024' }
  ];

  const projectMentors = [
    { name: 'Carlos Costa', role: 'carlos.costa@ua.pt', imageUrl: '/carlos_costa.png' },
    { name: 'Luís Bastião Silva', role: 'bastiao@ua.pt', imageUrl: '/luis_bastiao_silva.png' },
  ];

  return (
    <div>
      <div className="header">
        <h1>Medical Imaging SaaS Project</h1>
      </div>
      <div className="medical-imaging-container">
        <h2>Description</h2>
        <p className="description">In the last decade, cloud computing providers have revolutionized various industries by offering opportunities to reduce the burden of maintenance and upfront costs associated with hardware and software licensing. The healthcare sector has gradually embraced cloud technology, particularly in the realm of medical digital imaging. While digital imaging has brought numerous benefits, it also presents challenges in data storage and sharing, especially for smaller imaging centers. Leveraging cloud computing technology, this project aims to develop a Software-as-a-Service (SaaS) platform to address these challenges.</p>

        <h2>Problems</h2>
        <div className="problem-section">
          <p>Most doctors use WhatsApp to send medical images.</p>
          <p>Medical images take up a huge amount of disk space.</p>
          <p>Other applications available only with pricey subscriptions.</p>
        </div>

        <div style={{ marginBottom: '30px' }}></div>

        <h2>Goals</h2>
        <div className="goals-section">
          <p>Develop a Medical Imaging SaaS platform to address the challenges faced by medical imaging centers.</p>
          <p>Enable end-users, such as radiologists, to utilize the platform as a common utility.</p>
          <p>Implement an e-commerce broker to manage service usage and apply costs based on user profiles.</p>
          <p>Provide functionality for account management, archive size management, payment/billing management, and integration with imaging viewers and source connectors.</p>
          <p>Ensure scalability, reliability, and security of the platform.</p>
        </div>


        <h2>Team</h2>
        <div className="team-members">
          {teamMembers.map(member => (
            <div key={member.name} className="team-member">
              <img src={member.imageUrl} alt={member.name} className="team-member-photo" />
              <div className="member-details">
                <div className="member-name">{member.name}</div>
                <div className="member-role">{member.role}</div>
              </div>
            </div>
          ))}
        </div>

        <h2>Project Mentors</h2>
        <div className="mentors">
          {projectMentors.map(mentor => (
            <div key={mentor.name} className="mentor">
              <div className="mentor-details">
                <div className="mentor-name"><strong>{mentor.name}</strong></div>
                <div className="mentor-email" style={{ fontSize: '0.9em' }}>
                  {mentor.role}
                </div>
              </div>
            </div>
          ))}
        </div>

        <h2>Project Milestones</h2>
        <table className="milestones-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Deadline</th>
            </tr>
          </thead>
          <tbody>
            {milestones.map(milestone => (
              <tr key={milestone.title}>
                <td>{milestone.title}</td>
                <td>{milestone.description}</td>
                <td>{milestone.deadline}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MedicalImagingPage;
