import data from "../../submissionData.json";
import "cypress-localstorage-commands";

// const data = [
//   {
//     submission_link: "http://localhost:8080",
//     id: "shanti-local",
//     json_server_link: `http://localhost:9090/`,
//   },
// ];

let mock = {
  blogs: [
    {
      id: 1,
      category: "Business",
      title: "The Art of Cooking",
      sub_title: "Mastering the culinary craft",
      image:
        "https://media.istockphoto.com/id/1130934413/photo/close-up-of-the-hands-of-a-male-chef-on-a-black-background-pour-sauce-from-the-spoon-on-the.jpg?s=612x612&w=0&k=20&c=rH1Uq8YDdNSBiefTO3uXPJsyl3B2FZ4BUy0ilcNqbkI=",
      description:
        "Embark on a culinary journey and discover the art of cooking. This comprehensive guide covers everything from basic techniques to advanced recipes. Whether you're a novice or an experienced chef, this Blog will inspire you to explore new flavors and create delicious meals. Get ready to impress your friends and family with your culinary skills.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem delectus totam eligendi labore earum itaque quaerat unde consectetur natus magnam mollitia voluptates, ab corrupti necessitatibus quod provident cum dolorum nam.",
      author: {
        name: "Michael Johnson",
        profile_pic:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60",
      },
      publish_date: "2020-09-24",
    },
    {
      id: 2,
      category: "Sports",
      title: "The Science of Sleep",
      sub_title: "Unlocking the secrets of a good night's rest",
      image:
        "https://media.istockphoto.com/id/1256104370/photo/boy-sleeping-and-dreaming-a-future-in-the-space.jpg?s=612x612&w=0&k=20&c=OC0lwRToifkKRhAYGVRoWI8kFyqGcerGdaKV6FWItfg=",
      description:
        "Improve the quality of your sleep with the latest scientific findings. This Blog delves into the importance of sleep and provides practical strategies for achieving a restful night. From sleep hygiene to relaxation techniques, you'll discover how to optimize your sleep and wake up refreshed and energized.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem delectus totam eligendi labore earum itaque quaerat unde consectetur natus magnam mollitia voluptates, ab corrupti necessitatibus quod provident cum dolorum nam.",
      author: {
        name: "Emily Davis",
        profile_pic:
          "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60",
      },
      publish_date: "2022-05-15",
    },
    {
      id: 3,
      category: "Home",
      title:
        "Your most unhappy customers are your greatest source of learning.",
      sub_title:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      image:
        "https://media.istockphoto.com/id/1343529254/photo/man-feeling-depressed-on-receiving-bad-news-using-phone.jpg?s=612x612&w=0&k=20&c=YqZHcpSfFwvfHRchYfZKHfwVTO23o_6Q5OjaVv09hV4=",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Blogmarksgrove right at the coast of the Semantics, a large language ocean.A small river named Duden flows by their place and supplies it with the necessary regelialia. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem delectus totam eligendi labore earum itaque quaerat unde consectetur natus magnam mollitia voluptates, ab corrupti necessitatibus quod provident cum dolorum nam.",
      author: {
        name: "John Smith",
        profile_pic:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      },
      publish_date: "2020-02-14",
    },
    {
      id: 4,
      category: "International",
      title: "The power of positive thinking",
      sub_title: "Unlocking the secrets to a happier life",
      image:
        "https://media.istockphoto.com/id/1326217588/photo/shot-of-a-young-women-using-laptop-for-studying-at-home-stock-photo.jpg?s=612x612&w=0&k=20&c=4-cxva4sxEPOKMnTyvtRRb5fn0GZqhpQ7RVATwuz6Ao=",
      description:
        "Discover how positive thinking can transform your life and lead to greater happiness and success. This Blog offers practical tips and techniques to cultivate a positive mindset and overcome challenges. Learn from real-life examples and gain valuable insights from experts in the field.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem delectus totam eligendi labore earum itaque quaerat unde consectetur natus magnam mollitia voluptates, ab corrupti necessitatibus quod provident cum dolorum nam.",
      author: {
        name: "Jane Roberts",
        profile_pic:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60",
      },
      publish_date: "2022-01-18",
    },
    {
      id: 5,
      category: "Business",
      title: "The Art of Photography",
      sub_title: "Capturing moments that last a lifetime",
      image:
        "https://media.istockphoto.com/id/928442014/photo/close-up-image-of-urban-female-photographer-using-camera.jpg?s=612x612&w=0&k=20&c=yECzeAlFkUgbXbC6taS9n11GLW6MJBheN5oaKfLySY4=",
      description:
        "Unlock your creativity and master the art of photography. This Blog takes you on a visual journey, teaching you the techniques and principles behind captivating photos. From composition to lighting, you'll learn how to capture stunning images that tell a story. Whether you're a beginner or an experienced photographer, this Blog will inspire and elevate your skills.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem delectus totam eligendi labore earum itaque quaerat unde consectetur natus magnam mollitia voluptates, ab corrupti necessitatibus quod provident cum dolorum nam.",
      author: {
        name: "Sarah Thompson",
        profile_pic:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60",
      },
      publish_date: "2021-06-14",
    },
    {
      id: 6,
      category: "Health",
      title: "The Power of Habit",
      sub_title: "Harnessing the potential of daily routines",
      image:
        "https://media.istockphoto.com/id/679546600/photo/small-steps-big-changes.jpg?s=612x612&w=0&k=20&c=DrDHT6O86YtOiqIwyCS9hXOfiZqRFUQM1QxPAzBvLtU=",
      description:
        "Discover the science behind habits and learn how to transform your life through small changes. This Blog explores the power of habit formation and provides practical strategies for creating positive routines. Whether you want to improve your productivity, health, or relationships, understanding and leveraging the power of habit will be the key to your success.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem delectus totam eligendi labore earum itaque quaerat unde consectetur natus magnam mollitia voluptates, ab corrupti necessitatibus quod provident cum dolorum nam.",
      author: {
        name: "Daniel Johnson",
        profile_pic:
          "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60",
      },
      publish_date: "2021-03-30",
    },
    {
      id: 7,
      category: "Home",
      title: "The Art of Negotiation",
      sub_title: "Mastering the skills of persuasive communication",
      image:
        "https://media.istockphoto.com/id/539057695/photo/art-is-in-the-eyes-of-the-beholder.jpg?s=612x612&w=0&k=20&c=nQ5ODWCSrMskiaRbfjDUsrtJEfhq1ceuciZhOO5Zeww=",
      description:
        "Unlock the secrets of successful negotiations and enhance your communication skills. This Blog provides practical techniques for influencing others, handling conflicts, and achieving win-win outcomes. Whether you're a business professional or navigating personal relationships, mastering the art of negotiation will empower you to achieve your goals.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem delectus totam eligendi labore earum itaque quaerat unde consectetur natus magnam mollitia voluptates, ab corrupti necessitatibus quod provident cum dolorum nam.",
      author: {
        name: "David Lee",
        profile_pic:
          "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60",
      },
      publish_date: "2023-05-19",
    },
    {
      id: 8,
      category: "Entertainment",
      title: "The World of Art",
      sub_title: "Exploring the realms of creativity",
      image:
        "https://media.istockphoto.com/id/155006759/photo/colored-world-map-xxxl.jpg?s=612x612&w=0&k=20&c=w2zY26QM14VYj441hkraJeBRp9U5lqNLiC_nODI_TkA=",
      description:
        "Dive into the vibrant world of art and explore its diverse forms and expressions. This Blog showcases the works of renowned artists and delves into the history and significance of different art movements. From painting to sculpture, photography to installations, you'll gain a deeper appreciation for the power and beauty of art.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem delectus totam eligendi labore earum itaque quaerat unde consectetur natus magnam mollitia voluptates, ab corrupti necessitatibus quod provident cum dolorum nam.",
      author: {
        name: "Sophia Adams",
        profile_pic:
          "https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
      },
      publish_date: "2022-12-14",
    },
    {
      id: 9,
      category: "Home",
      title: "The Mindful Path",
      sub_title: "Embracing the present moment",
      image:
        "https://media.istockphoto.com/id/1187808826/photo/mature-woman-walks-down-trail-in-the-morning.jpg?s=612x612&w=0&k=20&c=nnIAzpIXf8jPhe_zGBfo0qROcelpwzQURgR6Hnrl37A=",
      description:
        "Discover the transformative power of mindfulness and learn how to cultivate a greater sense of peace and well-being. This Blog offers practical exercises and guided meditations to help you develop mindfulness in your daily life. By living in the present moment, you'll reduce stress, enhance focus, and deepen your connection with yourself and others.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem delectus totam eligendi labore earum itaque quaerat unde consectetur natus magnam mollitia voluptates, ab corrupti necessitatibus quod provident cum dolorum nam.",
      author: {
        name: "Olivia Wilson",
        profile_pic:
          "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
      },
      publish_date: "2023-07-25",
    },
    {
      id: 10,
      category: "International",
      title: "The Entrepreneur's Journey",
      sub_title: "Navigating the challenges of building a business",
      image:
        "https://media.istockphoto.com/id/463581675/photo/businessman-at-a-starting-line-on-long-desert-highway.jpg?s=612x612&w=0&k=20&c=34maVrjjrIQC4D6HHpH6iHqyOYyuVySN0CWdriYyZq8=",
      description:
        "Embark on the entrepreneurial path and learn from the experiences of successful business owners. This Blog provides valuable insights, practical advice, and inspiring stories to help you navigate the challenges of starting and growing a business. From idea generation to scaling, you'll gain the knowledge and confidence to turn your entrepreneurial dreams into reality.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem delectus totam eligendi labore earum itaque quaerat unde consectetur natus magnam mollitia voluptates, ab corrupti necessitatibus quod provident cum dolorum nam.",
      author: {
        name: "Robert Anderson",
        profile_pic:
          "https://images.unsplash.com/photo-1492681290082-e932832941e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
      },
      publish_date: "2020-06-01",
    },
    {
      id: 11,
      category: "Entertainment",
      title: "The Art of Public Speaking",
      sub_title: "Mastering the skills of effective communication",
      image:
        "https://media.istockphoto.com/id/478388593/photo/gallery-owner-during-opening.jpg?s=612x612&w=0&k=20&c=aCyii-DGgiOZGMO-z3_Ye08r5vyDwRSG254GylnChbY=",
      description:
        "Unlock the power of public speaking and become a confident and persuasive communicator. This Blog offers practical techniques for engaging your audience, structuring your speech, and delivering impactful presentations. Whether you're speaking in front of a small group or a large audience, mastering the art of public speaking will elevate your influence and impact.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem delectus totam eligendi labore earum itaque quaerat unde consectetur natus magnam mollitia voluptates, ab corrupti necessitatibus quod provident cum dolorum nam.",
      author: {
        name: "Grace Thompson",
        profile_pic:
          "https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
      },
      publish_date: "2022-09-17",
    },
    {
      id: 12,
      category: "Business",
      title: "The Art of Mindfulness",
      sub_title: "Cultivating presence and inner peace",
      image:
        "https://media.istockphoto.com/id/1002006634/photo/inspiration-quote-decoration.jpg?s=612x612&w=0&k=20&c=Mu9bWFchgM5qR3mGhNC80XVQhloYF0xthHw0-aQgOeA=",
      description:
        "Immerse yourself in the practice of mindfulness and discover its profound benefits for your mental and emotional well-being. This Blog offers guidance on integrating mindfulness into your daily life, from meditation techniques to mindful eating and mindful movement. By living with greater awareness and intention, you'll find more joy and fulfillment in every moment.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem delectus totam eligendi labore earum itaque quaerat unde consectetur natus magnam mollitia voluptates, ab corrupti necessitatibus quod provident cum dolorum nam.",
      author: {
        name: "Benjamin Roberts",
        profile_pic:
          "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
      },
      publish_date: "2023-02-01",
    },
    {
      id: 13,
      category: "Entertainment",
      title: "The Art of Time Management",
      sub_title: "Optimizing productivity and achieving balance",
      image:
        "https://media.istockphoto.com/id/1004613022/photo/hand-arranging-wood-block-stacking-with-elements-education-icon-diagram-of-knowledge.jpg?s=612x612&w=0&k=20&c=WgnJ4ll_4TEYoKIDjiSh89is29GmU8Ge0xOYksdOGz8=",
      description:
        "Maximize your productivity and take control of your time with effective time management strategies. This Blog offers practical tips, tools, and techniques to help you prioritize tasks, set goals, and make the most of your time. By achieving a balance between work and personal life, you'll experience greater fulfillment and success in all areas.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem delectus totam eligendi labore earum itaque quaerat unde consectetur natus magnam mollitia voluptates, ab corrupti necessitatibus quod provident cum dolorum nam.",
      author: {
        name: "Lucas Davis",
        profile_pic:
          "https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHVzZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      },
      publish_date: "2021-07-08",
    },
    {
      id: 14,
      category: "Sports",
      title: "The Art of Travel",
      sub_title: "Exploring the world and expanding horizons",
      image:
        "https://media.istockphoto.com/id/1449469260/photo/astronaut-in-front-of-dimensional-portal.jpg?s=612x612&w=0&k=20&c=IdaKNHYDdShcYPMw06BwSSAeVeH3I88cQgU1txv3qOU=",
      description:
        "Embark on an adventure of a lifetime and learn the art of travel. This Blog provides practical tips, cultural insights, and destination recommendations to help you make the most of your journeys. From solo travel to family vacations, you'll discover how to create meaningful experiences and connect with different cultures around the world.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem delectus totam eligendi labore earum itaque quaerat unde consectetur natus magnam mollitia voluptates, ab corrupti necessitatibus quod provident cum dolorum nam.",
      author: {
        name: "Emma Johnson",
        profile_pic:
          "https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHVzZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      },
      publish_date: "2023-04-17",
    },
    {
      id: 15,
      category: "Health",
      title: "The Art of Leadership",
      sub_title: "Inspiring and empowering others",
      image:
        "https://media.istockphoto.com/id/608627018/photo/the-best-tool-a-team-can-have-is-committed-leadership.jpg?s=612x612&w=0&k=20&c=Om8dArHV6moA1Kidb0PUxtY6A8OtyoatuylxJQidlxc=",
      description:
        "Unlock your leadership potential and learn how to inspire and empower others. This Blog explores the qualities and skills of effective leaders and provides practical strategies for leading teams and driving change. Whether you're leading in a professional or personal capacity, mastering the art of leadership will enable you to make a positive impact on those around you.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem delectus totam eligendi labore earum itaque quaerat unde consectetur natus magnam mollitia voluptates, ab corrupti necessitatibus quod provident cum dolorum nam.",
      author: {
        name: "Matthew Wilson",
        profile_pic:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHVzZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      },
      publish_date: "2021-05-17",
    },
  ],
};

let NewestBlog_mock = {
  NewBlog: [
    {
      id: 9,
      category: "Home",
      title: "The Mindful Path",
      sub_title: "Embracing the present moment",
      image:
        "https://media.istockphoto.com/id/1187808826/photo/mature-woman-walks-down-trail-in-the-morning.jpg?s=612x612&w=0&k=20&c=nnIAzpIXf8jPhe_zGBfo0qROcelpwzQURgR6Hnrl37A=",
      description:
        "Discover the transformative power of mindfulness and learn how to cultivate a greater sense of peace and well-being. This book offers practical exercises and guided meditations to help you develop mindfulness in your daily life. By living in the present moment, you'll reduce stress, enhance focus, and deepen your connection with yourself and others.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem delectus totam eligendi labore earum itaque quaerat unde consectetur natus magnam mollitia voluptates, ab corrupti necessitatibus quod provident cum dolorum nam.",
      author: {
        name: "Olivia Wilson",
        profile_pic:
          "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
      },
      publish_date: "2023-07-25",
    },
    {
      id: 7,
      category: "Home",
      title: "The Art of Negotiation",
      sub_title: "Mastering the skills of persuasive communication",
      image:
        "https://media.istockphoto.com/id/539057695/photo/art-is-in-the-eyes-of-the-beholder.jpg?s=612x612&w=0&k=20&c=nQ5ODWCSrMskiaRbfjDUsrtJEfhq1ceuciZhOO5Zeww=",
      description:
        "Unlock the secrets of successful negotiations and enhance your communication skills. This book provides practical techniques for influencing others, handling conflicts, and achieving win-win outcomes. Whether you're a business professional or navigating personal relationships, mastering the art of negotiation will empower you to achieve your goals.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem delectus totam eligendi labore earum itaque quaerat unde consectetur natus magnam mollitia voluptates, ab corrupti necessitatibus quod provident cum dolorum nam.",
      author: {
        name: "David Lee",
        profile_pic:
          "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60",
      },
      publish_date: "2023-05-19",
    },
    {
      id: 14,
      category: "Sports",
      title: "The Art of Travel",
      sub_title: "Exploring the world and expanding horizons",
      image:
        "https://media.istockphoto.com/id/1449469260/photo/astronaut-in-front-of-dimensional-portal.jpg?s=612x612&w=0&k=20&c=IdaKNHYDdShcYPMw06BwSSAeVeH3I88cQgU1txv3qOU=",
      description:
        "Embark on an adventure of a lifetime and learn the art of travel. This book provides practical tips, cultural insights, and destination recommendations to help you make the most of your journeys. From solo travel to family vacations, you'll discover how to create meaningful experiences and connect with different cultures around the world.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem delectus totam eligendi labore earum itaque quaerat unde consectetur natus magnam mollitia voluptates, ab corrupti necessitatibus quod provident cum dolorum nam.",
      author: {
        name: "Emma Johnson",
        profile_pic:
          "https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHVzZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      },
      publish_date: "2023-04-17",
    },
    {
      id: 12,
      category: "Business",
      title: "The Art of Mindfulness",
      sub_title: "Cultivating presence and inner peace",
      image:
        "https://media.istockphoto.com/id/1002006634/photo/inspiration-quote-decoration.jpg?s=612x612&w=0&k=20&c=Mu9bWFchgM5qR3mGhNC80XVQhloYF0xthHw0-aQgOeA=",
      description:
        "Immerse yourself in the practice of mindfulness and discover its profound benefits for your mental and emotional well-being. This book offers guidance on integrating mindfulness into your daily life, from meditation techniques to mindful eating and mindful movement. By living with greater awareness and intention, you'll find more joy and fulfillment in every moment.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem delectus totam eligendi labore earum itaque quaerat unde consectetur natus magnam mollitia voluptates, ab corrupti necessitatibus quod provident cum dolorum nam.",
      author: {
        name: "Benjamin Roberts",
        profile_pic:
          "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
      },
      publish_date: "2023-02-01",
    },
    {
      id: 8,
      category: "Entertainment",
      title: "The World of Art",
      sub_title: "Exploring the realms of creativity",
      image:
        "https://media.istockphoto.com/id/155006759/photo/colored-world-map-xxxl.jpg?s=612x612&w=0&k=20&c=w2zY26QM14VYj441hkraJeBRp9U5lqNLiC_nODI_TkA=",
      description:
        "Dive into the vibrant world of art and explore its diverse forms and expressions. This book showcases the works of renowned artists and delves into the history and significance of different art movements. From painting to sculpture, photography to installations, you'll gain a deeper appreciation for the power and beauty of art.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem delectus totam eligendi labore earum itaque quaerat unde consectetur natus magnam mollitia voluptates, ab corrupti necessitatibus quod provident cum dolorum nam.",
      author: {
        name: "Sophia Adams",
        profile_pic:
          "https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
      },
      publish_date: "2022-12-14",
    },
    {
      id: 11,
      category: "Entertainment",
      title: "The Art of Public Speaking",
      sub_title: "Mastering the skills of effective communication",
      image:
        "https://media.istockphoto.com/id/478388593/photo/gallery-owner-during-opening.jpg?s=612x612&w=0&k=20&c=aCyii-DGgiOZGMO-z3_Ye08r5vyDwRSG254GylnChbY=",
      description:
        "Unlock the power of public speaking and become a confident and persuasive communicator. This book offers practical techniques for engaging your audience, structuring your speech, and delivering impactful presentations. Whether you're speaking in front of a small group or a large audience, mastering the art of public speaking will elevate your influence and impact.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem delectus totam eligendi labore earum itaque quaerat unde consectetur natus magnam mollitia voluptates, ab corrupti necessitatibus quod provident cum dolorum nam.",
      author: {
        name: "Grace Thompson",
        profile_pic:
          "https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
      },
      publish_date: "2022-09-17",
    },
    {
      id: 2,
      category: "Sports",
      title: "The Science of Sleep",
      sub_title: "Unlocking the secrets of a good night's rest",
      image:
        "https://media.istockphoto.com/id/1256104370/photo/boy-sleeping-and-dreaming-a-future-in-the-space.jpg?s=612x612&w=0&k=20&c=OC0lwRToifkKRhAYGVRoWI8kFyqGcerGdaKV6FWItfg=",
      description:
        "Improve the quality of your sleep with the latest scientific findings. This book delves into the importance of sleep and provides practical strategies for achieving a restful night. From sleep hygiene to relaxation techniques, you'll discover how to optimize your sleep and wake up refreshed and energized.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem delectus totam eligendi labore earum itaque quaerat unde consectetur natus magnam mollitia voluptates, ab corrupti necessitatibus quod provident cum dolorum nam.",
      author: {
        name: "Emily Davis",
        profile_pic:
          "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60",
      },
      publish_date: "2022-05-15",
    },
    {
      id: 4,
      category: "International",
      title: "The power of positive thinking",
      sub_title: "Unlocking the secrets to a happier life",
      image:
        "https://media.istockphoto.com/id/1326217588/photo/shot-of-a-young-women-using-laptop-for-studying-at-home-stock-photo.jpg?s=612x612&w=0&k=20&c=4-cxva4sxEPOKMnTyvtRRb5fn0GZqhpQ7RVATwuz6Ao=",
      description:
        "Discover how positive thinking can transform your life and lead to greater happiness and success. This book offers practical tips and techniques to cultivate a positive mindset and overcome challenges. Learn from real-life examples and gain valuable insights from experts in the field.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem delectus totam eligendi labore earum itaque quaerat unde consectetur natus magnam mollitia voluptates, ab corrupti necessitatibus quod provident cum dolorum nam.",
      author: {
        name: "Jane Roberts",
        profile_pic:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60",
      },
      publish_date: "2022-01-18",
    },
    {
      id: 13,
      category: "Entertainment",
      title: "The Art of Time Management",
      sub_title: "Optimizing productivity and achieving balance",
      image:
        "https://media.istockphoto.com/id/1004613022/photo/hand-arranging-wood-block-stacking-with-elements-education-icon-diagram-of-knowledge.jpg?s=612x612&w=0&k=20&c=WgnJ4ll_4TEYoKIDjiSh89is29GmU8Ge0xOYksdOGz8=",
      description:
        "Maximize your productivity and take control of your time with effective time management strategies. This book offers practical tips, tools, and techniques to help you prioritize tasks, set goals, and make the most of your time. By achieving a balance between work and personal life, you'll experience greater fulfillment and success in all areas.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem delectus totam eligendi labore earum itaque quaerat unde consectetur natus magnam mollitia voluptates, ab corrupti necessitatibus quod provident cum dolorum nam.",
      author: {
        name: "Lucas Davis",
        profile_pic:
          "https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHVzZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      },
      publish_date: "2021-07-08",
    },
    {
      id: 5,
      category: "Business",
      title: "The Art of Photography",
      sub_title: "Capturing moments that last a lifetime",
      image:
        "https://media.istockphoto.com/id/928442014/photo/close-up-image-of-urban-female-photographer-using-camera.jpg?s=612x612&w=0&k=20&c=yECzeAlFkUgbXbC6taS9n11GLW6MJBheN5oaKfLySY4=",
      description:
        "Unlock your creativity and master the art of photography. This book takes you on a visual journey, teaching you the techniques and principles behind captivating photos. From composition to lighting, you'll learn how to capture stunning images that tell a story. Whether you're a beginner or an experienced photographer, this book will inspire and elevate your skills.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem delectus totam eligendi labore earum itaque quaerat unde consectetur natus magnam mollitia voluptates, ab corrupti necessitatibus quod provident cum dolorum nam.",
      author: {
        name: "Sarah Thompson",
        profile_pic:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60",
      },
      publish_date: "2021-06-14",
    },
    {
      id: 15,
      category: "Health",
      title: "The Art of Leadership",
      sub_title: "Inspiring and empowering others",
      image:
        "https://media.istockphoto.com/id/608627018/photo/the-best-tool-a-team-can-have-is-committed-leadership.jpg?s=612x612&w=0&k=20&c=Om8dArHV6moA1Kidb0PUxtY6A8OtyoatuylxJQidlxc=",
      description:
        "Unlock your leadership potential and learn how to inspire and empower others. This book explores the qualities and skills of effective leaders and provides practical strategies for leading teams and driving change. Whether you're leading in a professional or personal capacity, mastering the art of leadership will enable you to make a positive impact on those around you.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem delectus totam eligendi labore earum itaque quaerat unde consectetur natus magnam mollitia voluptates, ab corrupti necessitatibus quod provident cum dolorum nam.",
      author: {
        name: "Matthew Wilson",
        profile_pic:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHVzZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      },
      publish_date: "2021-05-17",
    },
    {
      id: 6,
      category: "Health",
      title: "The Power of Habit",
      sub_title: "Harnessing the potential of daily routines",
      image:
        "https://media.istockphoto.com/id/679546600/photo/small-steps-big-changes.jpg?s=612x612&w=0&k=20&c=DrDHT6O86YtOiqIwyCS9hXOfiZqRFUQM1QxPAzBvLtU=",
      description:
        "Discover the science behind habits and learn how to transform your life through small changes. This book explores the power of habit formation and provides practical strategies for creating positive routines. Whether you want to improve your productivity, health, or relationships, understanding and leveraging the power of habit will be the key to your success.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem delectus totam eligendi labore earum itaque quaerat unde consectetur natus magnam mollitia voluptates, ab corrupti necessitatibus quod provident cum dolorum nam.",
      author: {
        name: "Daniel Johnson",
        profile_pic:
          "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60",
      },
      publish_date: "2021-03-30",
    },
    {
      id: 1,
      category: "Business",
      title: "The Art of Cooking",
      sub_title: "Mastering the culinary craft",
      image:
        "https://media.istockphoto.com/id/1130934413/photo/close-up-of-the-hands-of-a-male-chef-on-a-black-background-pour-sauce-from-the-spoon-on-the.jpg?s=612x612&w=0&k=20&c=rH1Uq8YDdNSBiefTO3uXPJsyl3B2FZ4BUy0ilcNqbkI=",
      description:
        "Embark on a culinary journey and discover the art of cooking. This comprehensive guide covers everything from basic techniques to advanced recipes. Whether you're a novice or an experienced chef, this book will inspire you to explore new flavors and create delicious meals. Get ready to impress your friends and family with your culinary skills.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem delectus totam eligendi labore earum itaque quaerat unde consectetur natus magnam mollitia voluptates, ab corrupti necessitatibus quod provident cum dolorum nam.",
      author: {
        name: "Michael Johnson",
        profile_pic:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60",
      },
      publish_date: "2020-09-24",
    },
    {
      id: 10,
      category: "International",
      title: "The Entrepreneur's Journey",
      sub_title: "Navigating the challenges of building a business",
      image:
        "https://media.istockphoto.com/id/463581675/photo/businessman-at-a-starting-line-on-long-desert-highway.jpg?s=612x612&w=0&k=20&c=34maVrjjrIQC4D6HHpH6iHqyOYyuVySN0CWdriYyZq8=",
      description:
        "Embark on the entrepreneurial path and learn from the experiences of successful business owners. This book provides valuable insights, practical advice, and inspiring stories to help you navigate the challenges of starting and growing a business. From idea generation to scaling, you'll gain the knowledge and confidence to turn your entrepreneurial dreams into reality.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem delectus totam eligendi labore earum itaque quaerat unde consectetur natus magnam mollitia voluptates, ab corrupti necessitatibus quod provident cum dolorum nam.",
      author: {
        name: "Robert Anderson",
        profile_pic:
          "https://images.unsplash.com/photo-1492681290082-e932832941e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
      },
      publish_date: "2020-06-01",
    },
    {
      id: 3,
      category: "Home",
      title:
        "Your most unhappy customers are your greatest source of learning.",
      sub_title:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      image:
        "https://media.istockphoto.com/id/1343529254/photo/man-feeling-depressed-on-receiving-bad-news-using-phone.jpg?s=612x612&w=0&k=20&c=YqZHcpSfFwvfHRchYfZKHfwVTO23o_6Q5OjaVv09hV4=",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.A small river named Duden flows by their place and supplies it with the necessary regelialia. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem delectus totam eligendi labore earum itaque quaerat unde consectetur natus magnam mollitia voluptates, ab corrupti necessitatibus quod provident cum dolorum nam.",
      author: {
        name: "John Smith",
        profile_pic:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      },
      publish_date: "2020-02-14",
    },
  ],
};

let OldestBlog_mock = {
  OldBlog: [
    {
      id: 3,
      category: "Home",
      title:
        "Your most unhappy customers are your greatest source of learning.",
      sub_title:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      image:
        "https://media.istockphoto.com/id/1343529254/photo/man-feeling-depressed-on-receiving-bad-news-using-phone.jpg?s=612x612&w=0&k=20&c=YqZHcpSfFwvfHRchYfZKHfwVTO23o_6Q5OjaVv09hV4=",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Blogmarksgrove right at the coast of the Semantics, a large language ocean.A small river named Duden flows by their place and supplies it with the necessary regelialia. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem delectus totam eligendi labore earum itaque quaerat unde consectetur natus magnam mollitia voluptates, ab corrupti necessitatibus quod provident cum dolorum nam.",
      author: {
        name: "John Smith",
        profile_pic:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      },
      publish_date: "2020-02-14",
    },
    {
      id: 10,
      category: "International",
      title: "The Entrepreneur's Journey",
      sub_title: "Navigating the challenges of building a business",
      image:
        "https://media.istockphoto.com/id/463581675/photo/businessman-at-a-starting-line-on-long-desert-highway.jpg?s=612x612&w=0&k=20&c=34maVrjjrIQC4D6HHpH6iHqyOYyuVySN0CWdriYyZq8=",
      description:
        "Embark on the entrepreneurial path and learn from the experiences of successful business owners. This Blog provides valuable insights, practical advice, and inspiring stories to help you navigate the challenges of starting and growing a business. From idea generation to scaling, you'll gain the knowledge and confidence to turn your entrepreneurial dreams into reality.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem delectus totam eligendi labore earum itaque quaerat unde consectetur natus magnam mollitia voluptates, ab corrupti necessitatibus quod provident cum dolorum nam.",
      author: {
        name: "Robert Anderson",
        profile_pic:
          "https://images.unsplash.com/photo-1492681290082-e932832941e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
      },
      publish_date: "2020-06-01",
    },
    {
      id: 1,
      category: "Business",
      title: "The Art of Cooking",
      sub_title: "Mastering the culinary craft",
      image:
        "https://media.istockphoto.com/id/1130934413/photo/close-up-of-the-hands-of-a-male-chef-on-a-black-background-pour-sauce-from-the-spoon-on-the.jpg?s=612x612&w=0&k=20&c=rH1Uq8YDdNSBiefTO3uXPJsyl3B2FZ4BUy0ilcNqbkI=",
      description:
        "Embark on a culinary journey and discover the art of cooking. This comprehensive guide covers everything from basic techniques to advanced recipes. Whether you're a novice or an experienced chef, this Blog will inspire you to explore new flavors and create delicious meals. Get ready to impress your friends and family with your culinary skills.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem delectus totam eligendi labore earum itaque quaerat unde consectetur natus magnam mollitia voluptates, ab corrupti necessitatibus quod provident cum dolorum nam.",
      author: {
        name: "Michael Johnson",
        profile_pic:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60",
      },
      publish_date: "2020-09-24",
    },
    {
      id: 6,
      category: "Health",
      title: "The Power of Habit",
      sub_title: "Harnessing the potential of daily routines",
      image:
        "https://media.istockphoto.com/id/679546600/photo/small-steps-big-changes.jpg?s=612x612&w=0&k=20&c=DrDHT6O86YtOiqIwyCS9hXOfiZqRFUQM1QxPAzBvLtU=",
      description:
        "Discover the science behind habits and learn how to transform your life through small changes. This Blog explores the power of habit formation and provides practical strategies for creating positive routines. Whether you want to improve your productivity, health, or relationships, understanding and leveraging the power of habit will be the key to your success.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem delectus totam eligendi labore earum itaque quaerat unde consectetur natus magnam mollitia voluptates, ab corrupti necessitatibus quod provident cum dolorum nam.",
      author: {
        name: "Daniel Johnson",
        profile_pic:
          "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60",
      },
      publish_date: "2021-03-30",
    },
    {
      id: 15,
      category: "Health",
      title: "The Art of Leadership",
      sub_title: "Inspiring and empowering others",
      image:
        "https://media.istockphoto.com/id/608627018/photo/the-best-tool-a-team-can-have-is-committed-leadership.jpg?s=612x612&w=0&k=20&c=Om8dArHV6moA1Kidb0PUxtY6A8OtyoatuylxJQidlxc=",
      description:
        "Unlock your leadership potential and learn how to inspire and empower others. This Blog explores the qualities and skills of effective leaders and provides practical strategies for leading teams and driving change. Whether you're leading in a professional or personal capacity, mastering the art of leadership will enable you to make a positive impact on those around you.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem delectus totam eligendi labore earum itaque quaerat unde consectetur natus magnam mollitia voluptates, ab corrupti necessitatibus quod provident cum dolorum nam.",
      author: {
        name: "Matthew Wilson",
        profile_pic:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHVzZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      },
      publish_date: "2021-05-17",
    },
    {
      id: 5,
      category: "Business",
      title: "The Art of Photography",
      sub_title: "Capturing moments that last a lifetime",
      image:
        "https://media.istockphoto.com/id/928442014/photo/close-up-image-of-urban-female-photographer-using-camera.jpg?s=612x612&w=0&k=20&c=yECzeAlFkUgbXbC6taS9n11GLW6MJBheN5oaKfLySY4=",
      description:
        "Unlock your creativity and master the art of photography. This Blog takes you on a visual journey, teaching you the techniques and principles behind captivating photos. From composition to lighting, you'll learn how to capture stunning images that tell a story. Whether you're a beginner or an experienced photographer, this Blog will inspire and elevate your skills.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem delectus totam eligendi labore earum itaque quaerat unde consectetur natus magnam mollitia voluptates, ab corrupti necessitatibus quod provident cum dolorum nam.",
      author: {
        name: "Sarah Thompson",
        profile_pic:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60",
      },
      publish_date: "2021-06-14",
    },
    {
      id: 13,
      category: "Entertainment",
      title: "The Art of Time Management",
      sub_title: "Optimizing productivity and achieving balance",
      image:
        "https://media.istockphoto.com/id/1004613022/photo/hand-arranging-wood-block-stacking-with-elements-education-icon-diagram-of-knowledge.jpg?s=612x612&w=0&k=20&c=WgnJ4ll_4TEYoKIDjiSh89is29GmU8Ge0xOYksdOGz8=",
      description:
        "Maximize your productivity and take control of your time with effective time management strategies. This Blog offers practical tips, tools, and techniques to help you prioritize tasks, set goals, and make the most of your time. By achieving a balance between work and personal life, you'll experience greater fulfillment and success in all areas.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem delectus totam eligendi labore earum itaque quaerat unde consectetur natus magnam mollitia voluptates, ab corrupti necessitatibus quod provident cum dolorum nam.",
      author: {
        name: "Lucas Davis",
        profile_pic:
          "https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHVzZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      },
      publish_date: "2021-07-08",
    },
    {
      id: 4,
      category: "International",
      title: "The power of positive thinking",
      sub_title: "Unlocking the secrets to a happier life",
      image:
        "https://media.istockphoto.com/id/1326217588/photo/shot-of-a-young-women-using-laptop-for-studying-at-home-stock-photo.jpg?s=612x612&w=0&k=20&c=4-cxva4sxEPOKMnTyvtRRb5fn0GZqhpQ7RVATwuz6Ao=",
      description:
        "Discover how positive thinking can transform your life and lead to greater happiness and success. This Blog offers practical tips and techniques to cultivate a positive mindset and overcome challenges. Learn from real-life examples and gain valuable insights from experts in the field.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem delectus totam eligendi labore earum itaque quaerat unde consectetur natus magnam mollitia voluptates, ab corrupti necessitatibus quod provident cum dolorum nam.",
      author: {
        name: "Jane Roberts",
        profile_pic:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60",
      },
      publish_date: "2022-01-18",
    },
    {
      id: 2,
      category: "Sports",
      title: "The Science of Sleep",
      sub_title: "Unlocking the secrets of a good night's rest",
      image:
        "https://media.istockphoto.com/id/1256104370/photo/boy-sleeping-and-dreaming-a-future-in-the-space.jpg?s=612x612&w=0&k=20&c=OC0lwRToifkKRhAYGVRoWI8kFyqGcerGdaKV6FWItfg=",
      description:
        "Improve the quality of your sleep with the latest scientific findings. This Blog delves into the importance of sleep and provides practical strategies for achieving a restful night. From sleep hygiene to relaxation techniques, you'll discover how to optimize your sleep and wake up refreshed and energized.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem delectus totam eligendi labore earum itaque quaerat unde consectetur natus magnam mollitia voluptates, ab corrupti necessitatibus quod provident cum dolorum nam.",
      author: {
        name: "Emily Davis",
        profile_pic:
          "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60",
      },
      publish_date: "2022-05-15",
    },
    {
      id: 11,
      category: "Entertainment",
      title: "The Art of Public Speaking",
      sub_title: "Mastering the skills of effective communication",
      image:
        "https://media.istockphoto.com/id/478388593/photo/gallery-owner-during-opening.jpg?s=612x612&w=0&k=20&c=aCyii-DGgiOZGMO-z3_Ye08r5vyDwRSG254GylnChbY=",
      description:
        "Unlock the power of public speaking and become a confident and persuasive communicator. This Blog offers practical techniques for engaging your audience, structuring your speech, and delivering impactful presentations. Whether you're speaking in front of a small group or a large audience, mastering the art of public speaking will elevate your influence and impact.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem delectus totam eligendi labore earum itaque quaerat unde consectetur natus magnam mollitia voluptates, ab corrupti necessitatibus quod provident cum dolorum nam.",
      author: {
        name: "Grace Thompson",
        profile_pic:
          "https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
      },
      publish_date: "2022-09-17",
    },
    {
      id: 8,
      category: "Entertainment",
      title: "The World of Art",
      sub_title: "Exploring the realms of creativity",
      image:
        "https://media.istockphoto.com/id/155006759/photo/colored-world-map-xxxl.jpg?s=612x612&w=0&k=20&c=w2zY26QM14VYj441hkraJeBRp9U5lqNLiC_nODI_TkA=",
      description:
        "Dive into the vibrant world of art and explore its diverse forms and expressions. This Blog showcases the works of renowned artists and delves into the history and significance of different art movements. From painting to sculpture, photography to installations, you'll gain a deeper appreciation for the power and beauty of art.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem delectus totam eligendi labore earum itaque quaerat unde consectetur natus magnam mollitia voluptates, ab corrupti necessitatibus quod provident cum dolorum nam.",
      author: {
        name: "Sophia Adams",
        profile_pic:
          "https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
      },
      publish_date: "2022-12-14",
    },
    {
      id: 12,
      category: "Business",
      title: "The Art of Mindfulness",
      sub_title: "Cultivating presence and inner peace",
      image:
        "https://media.istockphoto.com/id/1002006634/photo/inspiration-quote-decoration.jpg?s=612x612&w=0&k=20&c=Mu9bWFchgM5qR3mGhNC80XVQhloYF0xthHw0-aQgOeA=",
      description:
        "Immerse yourself in the practice of mindfulness and discover its profound benefits for your mental and emotional well-being. This Blog offers guidance on integrating mindfulness into your daily life, from meditation techniques to mindful eating and mindful movement. By living with greater awareness and intention, you'll find more joy and fulfillment in every moment.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem delectus totam eligendi labore earum itaque quaerat unde consectetur natus magnam mollitia voluptates, ab corrupti necessitatibus quod provident cum dolorum nam.",
      author: {
        name: "Benjamin Roberts",
        profile_pic:
          "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
      },
      publish_date: "2023-02-01",
    },
    {
      id: 14,
      category: "Sports",
      title: "The Art of Travel",
      sub_title: "Exploring the world and expanding horizons",
      image:
        "https://media.istockphoto.com/id/1449469260/photo/astronaut-in-front-of-dimensional-portal.jpg?s=612x612&w=0&k=20&c=IdaKNHYDdShcYPMw06BwSSAeVeH3I88cQgU1txv3qOU=",
      description:
        "Embark on an adventure of a lifetime and learn the art of travel. This Blog provides practical tips, cultural insights, and destination recommendations to help you make the most of your journeys. From solo travel to family vacations, you'll discover how to create meaningful experiences and connect with different cultures around the world.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem delectus totam eligendi labore earum itaque quaerat unde consectetur natus magnam mollitia voluptates, ab corrupti necessitatibus quod provident cum dolorum nam.",
      author: {
        name: "Emma Johnson",
        profile_pic:
          "https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHVzZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      },
      publish_date: "2023-04-17",
    },
    {
      id: 7,
      category: "Home",
      title: "The Art of Negotiation",
      sub_title: "Mastering the skills of persuasive communication",
      image:
        "https://media.istockphoto.com/id/539057695/photo/art-is-in-the-eyes-of-the-beholder.jpg?s=612x612&w=0&k=20&c=nQ5ODWCSrMskiaRbfjDUsrtJEfhq1ceuciZhOO5Zeww=",
      description:
        "Unlock the secrets of successful negotiations and enhance your communication skills. This Blog provides practical techniques for influencing others, handling conflicts, and achieving win-win outcomes. Whether you're a business professional or navigating personal relationships, mastering the art of negotiation will empower you to achieve your goals.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem delectus totam eligendi labore earum itaque quaerat unde consectetur natus magnam mollitia voluptates, ab corrupti necessitatibus quod provident cum dolorum nam.",
      author: {
        name: "David Lee",
        profile_pic:
          "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60",
      },
      publish_date: "2023-05-19",
    },
    {
      id: 9,
      category: "Home",
      title: "The Mindful Path",
      sub_title: "Embracing the present moment",
      image:
        "https://media.istockphoto.com/id/1187808826/photo/mature-woman-walks-down-trail-in-the-morning.jpg?s=612x612&w=0&k=20&c=nnIAzpIXf8jPhe_zGBfo0qROcelpwzQURgR6Hnrl37A=",
      description:
        "Discover the transformative power of mindfulness and learn how to cultivate a greater sense of peace and well-being. This Blog offers practical exercises and guided meditations to help you develop mindfulness in your daily life. By living in the present moment, you'll reduce stress, enhance focus, and deepen your connection with yourself and others.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem delectus totam eligendi labore earum itaque quaerat unde consectetur natus magnam mollitia voluptates, ab corrupti necessitatibus quod provident cum dolorum nam.",
      author: {
        name: "Olivia Wilson",
        profile_pic:
          "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
      },
      publish_date: "2023-07-25",
    },
  ],
};

data.forEach(({ submission_link: url, id, json_server_link: server_url }) => {
  describe("React Assignment", function () {
    let acc_score = 1;

 

    beforeEach(() => {
      cy.clearCookies();
      cy.restoreLocalStorage();
      if (url.charAt(url.length - 1) != "/") {
        url = url + "/";
      }
      if (server_url.charAt(server_url.length - 1) != "/") {
        server_url = server_url + "/";
      }
      cy.writeFile("db.json", mock, (err) => {
        if (err) {
          console.error(err);
        }
      });
      Cypress.on("uncaught:exception", (err, runnable) => {
        return false;
      });
    });
    afterEach(() => {
      cy.saveLocalStorage();
    });

    it("Shows the correct Welcome title", () => {
      cy.visit(url);
      cy.get("#welcome").contains("Welcome")
      cy.get("#welcome").contains("Peter")
      cy.then(() => {
        acc_score += 1;
      });
    }); // 1
    // it.skip("Shows the correct time and Date on index page", () => {
    //   cy.visit(url);
    //   const currentDate = new Date();
    //   const currentTime = currentDate.toLocaleTimeString('en-US', {
    //     hour: '2-digit',
    //     minute: '2-digit',
    //     hour12: true
    //   });

    //   cy.get("#time").should('contain.text', currentTime);


    //   const formattedDate = currentDate.toLocaleDateString('en-US', {
    //     month: 'long',
    //     day: '2-digit',
    //     year: 'numeric'
    //   });
    //   cy.get('#date').should('contain.text', formattedDate);
    //   cy.then(() => {
    //     acc_score += 1;
    //   });
    // }); // 1
    it("Shows the correct initial data", () => {
      cy.intercept("GET", "**/blogs").as("getBlogs");
      cy.visit(url);
      cy.wait("@getBlogs");
      const numOfBlogs = mock.blogs.length;
      const cards = ".data-list-wrapper .card-list .card";
      cy.get(".card-list").children().should("have.length", numOfBlogs);
      cy.get(cards)
        .should("have.length", numOfBlogs)
        .first()
        .should("contain", mock.blogs[0].title);
      cy.get(cards)
        .eq(Math.ceil(numOfBlogs / 2))
        .should("contain", mock.blogs[Math.ceil(numOfBlogs / 2)].title);
      cy.get(cards)
        .should("have.length", numOfBlogs)
        .last()
        .should("contain", mock.blogs[numOfBlogs - 1].title);
      cy.then(() => {
        acc_score += 3;
      });
    }); // 3
    it("Able to delete a blog", () => {
      cy.intercept("GET", "**/blogs").as("getBlogs");
      cy.intercept("DELETE", "**/blogs/**").as("deleteRequest");
      cy.visit(url);
      cy.wait("@getBlogs");
      cy.get(".card-list").children().last().find(".deleteBtn").click();
      const cards = ".data-list-wrapper .card-list .card";
      cy.wait("@deleteRequest");
      cy.wait("@getBlogs");
      cy.wait(1000);
      cy.get(".card-list").children().should("have.length", 14);
      cy.get(cards).first().should("contain", "Mastering the culinary craft");
      cy.get(cards)
        .last()
        .should("contain", "Exploring the world and expanding horizons");
      cy.then(() => {
        acc_score += 2;
      });
    }); //2

    it("check sort Newest first functionality working as expected", () => {
      cy.intercept("GET", "**/blogs").as("getBlogs");
      cy.visit(url);
      const numOfBlogs = NewestBlog_mock.NewBlog.length;
      cy.wait("@getBlogs");
      const cards = ".data-list-wrapper .card-list .card";
      cy.get(cards)
      .should("have.length", numOfBlogs)
    
      cy.get("#newest-first").click();
      cy.wait(500);
      cy.get(".card-list").children().should("have.length", numOfBlogs);
    
      cy.get(cards).each((elem,i)=>{
        expect(elem.text()).to.include(NewestBlog_mock.NewBlog[i].title)
        expect(elem.text()).to.include(NewestBlog_mock.NewBlog[i].sub_title)
        expect(elem.text()).to.include(NewestBlog_mock.NewBlog[i].category)
        expect(elem.text()).to.include(NewestBlog_mock.NewBlog[i].author.name)
        expect(elem.text()).to.include(NewestBlog_mock.NewBlog[i].publish_date)
      })
        cy.then(() => {
          acc_score += 1;
        });
    });//1
    it("check sort Oldest first functionality working as expected", () => {
      cy.intercept("GET", "**/blogs").as("getBlogs");
      cy.visit(url);
      const numOfBlogs = OldestBlog_mock.OldBlog.length;
      cy.wait("@getBlogs");
      const cards = ".data-list-wrapper .card-list .card";
      cy.get(cards)
      .should("have.length", numOfBlogs)
    
      cy.get("#oldest-first").click();
      cy.wait(500);
      cy.get(".card-list").children().should("have.length", numOfBlogs);
    
      cy.get(cards).each((elem,i)=>{
        expect(elem.text()).to.include(OldestBlog_mock.OldBlog[i].title)
        expect(elem.text()).to.include(OldestBlog_mock.OldBlog[i].sub_title)
        expect(elem.text()).to.include(OldestBlog_mock.OldBlog[i].category)
        expect(elem.text()).to.include(OldestBlog_mock.OldBlog[i].author.name)
        expect(elem.text()).to.include(OldestBlog_mock.OldBlog[i].publish_date)
      })
        cy.then(() => {
          acc_score += 1;
        });
    });//1
    it("check filter International functionality working as expected", () => {
      cy.intercept("GET", "**/blogs").as("getBlogs");
      cy.visit(url);
      cy.wait("@getBlogs");
      cy.get("#filter-International").click();
      const cards = ".data-list-wrapper .card-list .card";
      cy.wait(500);
      let arr = [];
      cy.get(cards)
        .each((el) => {
          arr.push(el.find(".category").text().trim());
        })
        .then(() => {
          // console.log(arr, arr.length);
          const isInternational = arr.reduce(
            (n, item) => n !== false && item === "International"
          );
          expect(!!isInternational).to.be.true;
          expect(arr.length).to.be.greaterThan(0);
        });
      cy.then(() => {
        acc_score += 1;
      });
    }); // 1
    it("check filter Business functionality working as expected", () => {
      cy.intercept("GET", "**/blogs").as("getBlogs");
      cy.visit(url);
      cy.wait("@getBlogs");
      cy.get("#filter-Business").click();
      const cards = ".data-list-wrapper .card-list .card";
      cy.wait(500);
      let arr = [];
      cy.get(cards)
        .each((el) => {
          arr.push(el.find(".category").text().trim());
        })
        .then(() => {
          // console.log(arr, arr.length);
          const isBusiness = arr.reduce(
            (n, item) => n !== false && item === "Business"
          );
          expect(!!isBusiness).to.be.true;
          expect(arr.length).to.be.greaterThan(0);
        });
      cy.then(() => {
        acc_score += 1;
      });
    }); // 1
    it("check filter Entertainment functionality working as expected", () => {
      cy.intercept("GET", "**/blogs").as("getBlogs");
      cy.visit(url);
      cy.wait("@getBlogs");
      cy.get("#filter-Entertainment").click();
      const cards = ".data-list-wrapper .card-list .card";
      cy.wait(500);
      let arr = [];
      cy.get(cards)
        .each((el) => {
          arr.push(el.find(".category").text().trim());
        })
        .then(() => {
          // console.log(arr, arr.length);
          const isEntertainment = arr.reduce(
            (n, item) => n !== false && item === "Entertainment"
          );
          expect(!!isEntertainment).to.be.true;
          expect(arr.length).to.be.greaterThan(0);
        });
      cy.then(() => {
        acc_score += 1;
      });
    }); // 1
    it("check filter Sports functionality working as expected", () => {
      cy.intercept("GET", "**/blogs").as("getBlogs");
      cy.visit(url);
      cy.wait("@getBlogs");
      cy.get("#filter-Sports").click();
      const cards = ".data-list-wrapper .card-list .card";
      cy.wait(500);
      let arr = [];
      cy.get(cards)
        .each((el) => {
          arr.push(el.find(".category").text().trim());
        })
        .then(() => {
          // console.log(arr, arr.length);
          const isSports = arr.reduce(
            (n, item) => n !== false && item === "Sports"
          );
          expect(!!isSports).to.be.true;
          expect(arr.length).to.be.greaterThan(0);
        });
      cy.then(() => {
        acc_score += 1;
      });
    }); // 1
    it("check filter Health functionality working as expected", () => {
      cy.intercept("GET", "**/blogs").as("getBlogs");
      cy.visit(url);
      cy.wait("@getBlogs");
      cy.get("#filter-Health").click();
      const cards = ".data-list-wrapper .card-list .card";
      cy.wait(500);
      let arr = [];
      cy.get(cards)
        .each((el) => {
          arr.push(el.find(".category").text().trim());
        })
        .then(() => {
          // console.log(arr, arr.length);
          const isHealth = arr.reduce(
            (n, item) => n !== false && item === "Health"
          );
          expect(!!isHealth).to.be.true;
          expect(arr.length).to.be.greaterThan(0);
        });
      cy.then(() => {
        acc_score += 1;
      });
    }); // 1
    it("Able to read blog using Read more button", () => {
      cy.intercept("GET", "**/blogs").as("getBlogs");
      cy.visit(url);
      cy.wait("@getBlogs");
      const numOfBlogs = mock.blogs.length;
      const cards = ".data-list-wrapper .card-list .card";
      cy.get(".card-list").children().should("have.length", numOfBlogs);
      cy.get(cards)
      .eq(Math.ceil(numOfBlogs / 2))
        .find(".readBtn").click();
        cy.location("pathname").should("eq", "/blog.html");
      
        cy.get(".title").should("contain",mock.blogs[Math.ceil(numOfBlogs / 2)].title)
        cy.get(".sub_title").should("contain",mock.blogs[Math.ceil(numOfBlogs / 2)].sub_title)
 
        cy.get(".profile_pic").should('have.attr', 'src', mock.blogs[Math.ceil(numOfBlogs / 2)].author.profile_pic);
        cy.get(".name").should("contain",mock.blogs[Math.ceil(numOfBlogs / 2)].author.name)
        cy.get(".image").should('have.attr', 'src',mock.blogs[Math.ceil(numOfBlogs / 2)].image)
        cy.get(".description").should("contain",mock.blogs[Math.ceil(numOfBlogs / 2)].description)
    
      cy.then(() => {
        acc_score += 2;
      });
    }); //2
    it("Read more should add data in localStorage",()=>{
      cy.restoreLocalStorage();
      const numOfBlogs = mock.blogs.length;
      let data = JSON.parse(localStorage.getItem("blog"));
      console.log(data)
      expect(data.title).to.contains(mock.blogs[Math.ceil(numOfBlogs / 2)].title)
      expect(data.sub_title).to.contains(mock.blogs[Math.ceil(numOfBlogs / 2)].sub_title)
      expect(data.image).to.contains(mock.blogs[Math.ceil(numOfBlogs / 2)].image)
      expect(data.description).to.contains(mock.blogs[Math.ceil(numOfBlogs / 2)].description)
      cy.then(() => {
        acc_score += 1;
      });
    })//1
    
    it(`generate score`, () => {
      //////////////
      console.log(acc_score);
      let result = {
        id,
        marks: Math.floor(acc_score),
      };
      result = JSON.stringify(result);
      cy.writeFile("results.json", `\n${result},`, { flag: "a+" }, (err) => {
        if (err) {
          console.error(err);
        }
      });
      //////////////////
    });
  });
});
