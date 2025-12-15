import React from "react";

const MeetOurTeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
      name: "Sarah Johnson",
      role: "CEO",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      name: "Michael Chen",
      role: "CTO",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      name: "Emma Rodriguez",
      role: "Design Director",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      name: "David Thompson",
      role: "Product Manager",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      name: "Alex Park",
      role: "Lead Developer",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
      name: "Lisa Wang",
      role: "Marketing Director",
    },
    {
      id: 7,
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      name: "James Miller",
      role: "Sales Manager",
    },
    {
      id: 8,
      image:
        "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      name: "Robert Davis",
      role: "Operations Manager",
    },
  ];

  return (
    <div id="meet-our-team" className='bg-gray-50 py-16 lg:py-24 font-roboto scroll-mt-20'>
      <div className=' mx-auto flex flex-col items-center px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='text-center mb-12'>
          <p className='text-[#FFAB40] text-[20px] font-[500] mb-2'>Decision Makers</p>
          <h2 className='text-3xl md:text-5xl font-[800] text-[#0F172A] leading-[110%] '>
            Meet Our Team
          </h2>
        </div>

        {/* Team Pictures Grid */}
        <div className='flex md:pl-[200px] self-end w-full '>
          <div className='flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory'>
            {teamMembers.map((member, index) => (
              <div key={member.id} className='flex-shrink-0 w-64 snap-start group cursor-pointer'>
                <div className='aspect-[4/5] rounded-lg overflow-hidden mb-4 bg-gray-200'>
                  <img
                    src={member.image}
                    alt={member.name}
                    className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
                  />
                </div>
              </div>
            ))}
            {/* Right padding to ensure last item has space */}
            <div className='flex-shrink-0 w-4 sm:w-6 lg:w-8'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetOurTeamSection;
