import { IPost } from "@/interface/post.interface";

const postsData: IPost[] = [
  {
    id: 1,
    content: "Just finished the quarterly report. Great job team! Our project efficiency has increased by 25% this quarter.",
    mediaType: "image",
    mediaUrl: "https://images.pexels.com/photos/6150527/pexels-photo-6150527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    author: {
      id: 1,
      name: "John Doe",
      avatar: "https://img.freepik.com/premium-photo/arafed-man-black-shirt-posing-picture-with-white-background_771703-57711.jpg?w=740",
      role: "Project Manager"
    },
    createdAt: "2023-06-15T09:30:00",
    likes: 24,
    comments: [
      {
        id: 1,
        content: "Amazing work! Looking forward to the next quarter.",
        author: {
          id: 2,
          name: "Jane Smith",
          avatar: "https://manez-dashboard.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar2.2be06eb4.png&w=750&q=75",
          role: "Team Lead"
        },
        createdAt: "2023-06-15T10:15:00",
        likes: 5,
        isLiked: false
      },
      {
        id: 2,
        content: "The new approach really paid off!",
        author: {
          id: 3,
          name: "Robert Johnson",
          avatar: "https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?t=st=1742160620~exp=1742164220~hmac=e0a464f7d541a383d4aa7396e190ca8f64bcf217401fd06a958f454d5672f214&w=740",
          role: "Developer"
        },
        createdAt: "2023-06-15T11:22:00",
        likes: 3,
        isLiked: true
      }
    ],
    isLiked: true
  },
  {
    id: 2,
    content: "Check out our new office space! The renovation is complete and it looks amazing. Can't wait for everyone to see it on Monday.",
    mediaType: "video",
    mediaUrl: "https://videos.pexels.com/video-files/4487124/4487124-uhd_2560_1440_25fps.mp4",
    author: {
      id: 4,
      name: "Sarah Williams",
      avatar: "https://img.freepik.com/free-photo/front-view-beautiful-happy-woman_23-2148369448.jpg",
      role: "Office Manager"
    },
    createdAt: "2023-06-14T15:45:00",
    likes: 42,
    comments: [
      {
        id: 3,
        content: "This looks incredible! Love the new design.",
        author: {
          id: 5,
          name: "Michael Brown",
          avatar: "https://manez-dashboard.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar16.4f0b001c.png&w=750&q=75",
          role: "UI Designer"
        },
        createdAt: "2023-06-14T16:30:00",
        likes: 7,
        isLiked: true
      }
    ],
    isLiked: false
  },
  {
    id: 3,
    content: "Important announcement: Our company has been nominated for the 'Best Workplace Culture' award! Thanks to everyone for making this possible.",
    mediaType: "text",
    author: {
      id: 6,
      name: "Emily Davis",
      avatar: "https://manez-dashboard.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar10.9634d33d.png&w=750&q=75",
      role: "HR Director"
    },
    createdAt: "2023-06-13T11:00:00",
    likes: 56,
    comments: [
      {
        id: 4,
        content: "Well deserved! We have the best team.",
        author: {
          id: 7,
          name: "David Wilson",
          avatar: "https://manez-dashboard.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar4.b09a6ce6.png&w=750&q=75",
          role: "Marketing Specialist"
        },
        createdAt: "2023-06-13T11:45:00",
        likes: 9,
        isLiked: false
      },
      {
        id: 5,
        content: "Congratulations to all of us! This is huge!",
        author: {
          id: 8,
          name: "Lisa Martinez",
          avatar: "https://img.freepik.com/premium-photo/cute-woman_298317-1316.jpg",
          role: "Sales Manager"
        },
        createdAt: "2023-06-13T12:15:00",
        likes: 6,
        isLiked: true
      },
      {
        id: 6,
        content: "I'm so proud to be part of this company!",
        author: {
          id: 9,
          name: "James Anderson",
          avatar: "https://img.freepik.com/premium-photo/portrait-handsome-bearded-hispanic-man-with-curly-hair_251136-43920.jpg?w=740",
          role: "Customer Support"
        },
        createdAt: "2023-06-13T13:30:00",
        likes: 4,
        isLiked: false
      }
    ],
    isLiked: true
  },
  {
    id: 4,
    content: "Just launched our new healthcare app with integrated patient monitoring features. This will revolutionize how we track patient progress and provide care.",
    mediaType: "image",
    mediaUrl: "https://images.pexels.com/photos/6823569/pexels-photo-6823569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    author: {
      id: 10,
      name: "Alex Turner",
      avatar: "https://img.freepik.com/premium-photo/man-with-beard-suit_916191-428860.jpg?w=740",
      role: "Head of Technology"
    },
    createdAt: "2023-06-12T14:20:00",
    likes: 78,
    comments: [
      {
        id: 7,
        content: "This is going to change everything! Great work team!",
        author: {
          id: 11,
          name: "Jessica Lee",
          avatar: "https://img.freepik.com/premium-photo/portrait-young-lady-red-jacket_926199-2840597.jpg",
          role: "Medical Director"
        },
        createdAt: "2023-06-12T15:10:00",
        likes: 12,
        isLiked: true
      }
    ],
    isLiked: false
  }
];

export default postsData; 