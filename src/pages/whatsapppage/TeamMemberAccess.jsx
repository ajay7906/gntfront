import React, { useState } from 'react';

import { Phone,Plus, Minus, MessageSquare, Badge, Bot, UserPlus, Inbox, ClipboardList } from 'lucide-react';

const TabButton = ({ isActive, onClick, icon: Icon, label }) => (
    <button
      onClick={onClick}
      className={`flex items-center justify-center w-full px-4 py-3 mb-2 transition-colors duration-200 ${
        isActive 
          ? 'bg-green-200 text-gray-800 font-medium' 
          : 'bg-white hover:bg-gray-50 text-gray-600'
      }`}
    >
      <Icon className="w-5 h-5 mr-2" />
      <span>{label}</span>
    </button>
);
  
const TabContent = ({ activeTab }) => {
    const content = {
      member: (
        <div>
          <h3 className="text-xl font-semibold mb-4">Add Team Member</h3>
          <p>Log into the WhatsApp API dashboard and select "Create Chatbot". 
              Set up your chatbot with predefined workflows, automated responses, 
              and integrating it with business tools. </p> <br />
              <p>
              Test the chatbot and ensure that it responds accordingly and deploy for use 
              by your team. 
              </p>
        </div>
      ),
      inbox: (
        <div>
          <h3 className="text-xl font-semibold mb-4">Shared Team Inbox</h3>
          <p>Login to your WhatsApp API account, go to the "Shared Team Inbox" section. 
          Add team members with roles for shared inbox access.</p><br />
          <p>Guarantee that the team member's permissions allow them to read and reply to 
          customer messages. 
          </p>
        </div>
      ),
      task: (
        <div>
          <h3 className="text-xl font-semibold mb-4">Assign Task to Team</h3>
          <p>From the interface provided by the WhatsApp API create and assign 
            tasks for team members. Define task detail, including priority and due date.</p><br />
          <p>Team members have access to and can track these tasks assigned to them, in the 
            task management area.</p>
        </div>
      ),
    };
  
    return (
      <div className="p-6 bg-white/80 rounded-lg">
        {content[activeTab]}
      </div>
    );
};
  
const TeamMemberAccess = () => {
    const [activeTab, setActiveTab] = useState('member');
  
    return (
      <div className="bg-amber-300 p-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-6">Team Member & Roll Access</h2>
            <p className="text-gray-800 max-w-3xl mx-auto mb-8">
              GNTINDIA provides you with features like adding team members to WhatsApp API account and 
              providing role based access permissions for them. These features allow businesses to control 
              what each team member can access like chats, contacts, reports, etc. With role-specific 
              permissions, businesses can assign roles such as admin, support agent, or viewer, each with 
              distinct access rights, to tailor team involvement according to their responsibilities.
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left Column - Tabs */}
            <div className="space-y-2">
              <TabButton
                isActive={activeTab === 'member'}
                onClick={() => setActiveTab('member')}
                icon={UserPlus}
                label="ADD TEAM MEMBER"
              />
              <TabButton
                isActive={activeTab === 'inbox'}
                onClick={() => setActiveTab('inbox')}
                icon={Inbox}
                label="SHARED TEAM INBOX"
              />
              <TabButton
                isActive={activeTab === 'task'}
                onClick={() => setActiveTab('task')}
                icon={ClipboardList}
                label="ASSIGN TASK TO TEAM"
              />
            </div>
  
            {/* Right Column - Content */}
            <div className="md:col-span-2">
              <TabContent activeTab={activeTab} />
            </div>
          </div>
        </div>
      </div>
    );
};

export default TeamMemberAccess;