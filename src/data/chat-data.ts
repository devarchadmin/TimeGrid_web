import { CompanyChat, DirectChat, GroupChat, Message, User } from "@/interface/chat.interface";
import { v4 as uuidv4 } from 'uuid';

// Mock users
export const users: User[] = [
  {
    id: '1',
    name: 'David Peters',
    role: 'admin',
    avatar: 'https://img.freepik.com/free-photo/portrait-smiling-charming-young-man-grey-t-shirt-standing-against-plain-background_23-2148213406.jpg',
    position: 'Senior Manager',
    status: 'online'
  },
  {
    id: '2',
    name: 'Lisa Roy',
    role: 'employee',
    avatar: 'https://img.freepik.com/premium-photo/arafed-woman-black-shirt-posing-picture_899870-57451.jpg',
    position: 'Web Developer',
    status: 'online'
  },
  {
    id: '3',
    name: 'Jamie Taylor',
    role: 'employee',
    avatar: 'https://img.freepik.com/premium-photo/18yearold-boy-with-small-beard-healthy-body-wearing-black-tshirt-confident-expression_896590-32894.jpg?w=740',
    position: 'UI/UX Designer',
    status: 'offline',
    lastSeen: '2023-06-15T10:30:00'
  },
  {
    id: '4',
    name: 'Amy Frost',
    role: 'employee',
    avatar: 'https://img.freepik.com/premium-photo/hyper-realistic-beautiful-elegant-indian-woman-wearing-light-pink-linen-salwar-short-hair_862994-109462.jpg',
    position: 'HR Manager',
    status: 'busy'
  },
  {
    id: '5',
    name: 'Paul Wilson',
    role: 'employee',
    avatar: 'https://img.freepik.com/premium-photo/man-suit-with-blue-shirt-blue-shirt_905510-41744.jpg?w=740',
    position: 'Data Analyst',
    status: 'away'
  },
  {
    id: '6',
    name: 'Ana Williams',
    role: 'employee',
    avatar: 'https://img.freepik.com/premium-photo/cute-teenager-girl_146671-1608.jpg',
    position: 'Content Writer',
    status: 'online'
  }
];

// Current logged-in user (admin/manager)
export const currentUser: User = users[0];

// Messages
const createMessage = (sender: string, content: string, timestamp: string, read: boolean = true, attachments: any[] = []): Message => ({
  id: uuidv4(),
  sender,
  content,
  timestamp,
  read,
  attachments
});

// Mock messages
const companyMessages: Message[] = [
  createMessage('1', 'Hello everyone! Welcome to the company-wide chat channel.', '2023-06-15T09:00:00', true),
  createMessage('2', 'Thank you, David! Glad to be here.', '2023-06-15T09:05:00', true),
  createMessage('3', 'Looking forward to collaborating with everyone!', '2023-06-15T09:10:00', true),
  createMessage('4', 'Is there a meeting scheduled for this week?', '2023-06-15T09:15:00', true),
  createMessage('1', 'Yes, we have a team meeting on Thursday at 2 PM.', '2023-06-15T09:20:00', true),
];

const projectTeamMessages: Message[] = [
  createMessage('1', "Team, I've created this group for our new project.", '2023-06-14T14:00:00', true),
  createMessage('3', "Great! What's the timeline for this project?", '2023-06-14T14:05:00', true),
  createMessage('1', 'We need to complete it by the end of next month.', '2023-06-14T14:10:00', true),
  createMessage('2', "I've already started working on the design mockups.", '2023-06-14T14:15:00', true),
  createMessage('1', "Excellent! Let's schedule a review meeting next week.", '2023-06-14T14:20:00', true),
];

const directMessages: Record<string, Message[]> = {
  '2': [
    createMessage('1', "Hi Lisa, how's the website redesign coming along?", '2023-06-15T11:00:00', true),
    createMessage('2', "Hi David, it's going well. I should have the first draft ready by tomorrow.", '2023-06-15T11:05:00', true),
    createMessage('1', 'That sounds great! Looking forward to seeing it.', '2023-06-15T11:10:00', true),
  ],
  '3': [
    createMessage('3', 'Hi David, have you got the project report pdf?', '2023-06-14T10:35:00', true),
    createMessage('1', 'NO. I did not get it', '2023-06-14T10:38:00', true),
    createMessage('3', 'Ok, I will just sent it here. Plz be sure to fill the details by today end of the day.', '2023-06-14T10:42:00', true),
    createMessage('3', 'project_report.pdf', '2023-06-14T10:43:00', true, [
      {
        id: uuidv4(),
        type: 'document',
        url: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/31/9f/4e/319f4e62-13dc-2128-69d8-23d98c929b13/ReleaseAppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/1200x600wa.png',
        name: 'project_report.pdf',
        size: '2.5MB'
      }
    ]),
    createMessage('1', 'Ok. Should I send it over email as well after filling the details.', '2023-06-14T10:46:00', true),
    createMessage('3', "Ya. I'll be adding more team members to it.", '2023-06-14T10:48:00', true),
    createMessage('1', 'OK', '2023-06-14T10:49:00', true),
  ],
  '4': [
    createMessage('4', 'David, can we discuss the new hiring plan?', '2023-06-13T15:20:00', true),
    createMessage('1', "Sure, Amy. I'm available tomorrow morning.", '2023-06-13T15:25:00', true),
    createMessage('4', 'Perfect, 10 AM works for me.', '2023-06-13T15:30:00', true),
  ],
  '5': [
    createMessage('1', 'Paul, I need the quarterly analysis report by Friday.', '2023-06-12T09:15:00', true),
    createMessage('5', "I'm working on it and will have it ready by Thursday.", '2023-06-12T09:20:00', true),
    createMessage('1', 'Great, thanks!', '2023-06-12T09:22:00', true),
  ],
  '6': [
    createMessage('6', "David, I've completed the blog post for the new product launch.", '2023-06-10T16:40:00', true),
    createMessage('1', "Thanks Ana, I'll review it today.", '2023-06-10T16:45:00', true),
    createMessage('6', 'Do you need any changes to the formatting?', '2023-06-10T16:48:00', false),
  ],
};

// Create chats
export const companyChat: CompanyChat = {
  id: 'company-all',
  type: 'group',
  name: 'Company Group',
  description: 'Company-wide communication channel for all employees',
  participants: users,
  createdBy: '1',
  createdAt: '2023-06-01T00:00:00',
  admins: ['1'],
  messages: companyMessages,
  lastMessage: companyMessages[companyMessages.length - 1],
  updatedAt: companyMessages[companyMessages.length - 1].timestamp,
  isCompanyWide: true
};

export const projectTeamChat: GroupChat = {
  id: 'project-team',
  type: 'group',
  name: 'Project Team',
  description: 'Group for the new website project team',
  participants: [users[0], users[1], users[2]],
  createdBy: '1',
  createdAt: '2023-06-14T14:00:00',
  admins: ['1'],
  messages: projectTeamMessages,
  lastMessage: projectTeamMessages[projectTeamMessages.length - 1],
  updatedAt: projectTeamMessages[projectTeamMessages.length - 1].timestamp
};

// Create direct chats
export const directChats: DirectChat[] = users.slice(1).map((user) => {
  const messages = directMessages[user.id] || [];
  return {
    id: `direct-${user.id}`,
    type: 'direct',
    participants: [users[0], user],
    messages: messages,
    lastMessage: messages.length > 0 ? messages[messages.length - 1] : undefined,
    updatedAt: messages.length > 0 ? messages[messages.length - 1].timestamp : '2023-06-01T00:00:00'
  };
});

// Combine all chats
export const allChats = [companyChat, projectTeamChat, ...directChats]; 