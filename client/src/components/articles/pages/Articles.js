import React from 'react'
import FeaturedArticle from '../../home/elements/FeaturedArticle'
function Articles() {
    const articles_data = [
        {
            "id": 1,
            "img": "https://i.pinimg.com/originals/a2/df/98/a2df98ecb96aaf26615c49e79bab8d8b.jpg",
            "title": "Understanding Stress Management",
            "description": "Learn effective stress management techniques to improve your mental well-being."
          },
          {
            "id": 2,
            "img": "https://i.pinimg.com/originals/a2/df/98/a2df98ecb96aaf26615c49e79bab8d8b.jpg",
            "title": "Coping with Anxiety",
            "description": "Explore strategies to cope with anxiety and regain control over your life."
          },
          {
            "id": 3,
            "img": "https://i.pinimg.com/originals/a2/df/98/a2df98ecb96aaf26615c49e79bab8d8b.jpg",
            "title": "Depression Awareness",
            "description": "Raise awareness about depression and its impact on mental health."
          },
          {
            "id": 4,
            "img": "https://i.pinimg.com/originals/a2/df/98/a2df98ecb96aaf26615c49e79bab8d8b.jpg",
            "title": "Mindfulness Meditation",
            "description": "Practice mindfulness meditation to enhance mental clarity and reduce stress."
          },
          {
            "id": 5,
            "img": "https://i.pinimg.com/originals/a2/df/98/a2df98ecb96aaf26615c49e79bab8d8b.jpg",
            "title": "Supportive Communities",
            "description": "Connect with others in supportive communities to share your mental health journey."
          },
          {
            "id": 6,
            "img": "https://i.pinimg.com/originals/a2/df/98/a2df98ecb96aaf26615c49e79bab8d8b.jpg",
            "title": "Self-Care Tips",
            "description": "Discover self-care tips and routines to prioritize your mental well-being."
          },
          {
            "id": 7,
            "img": "https://i.pinimg.com/originals/a2/df/98/a2df98ecb96aaf26615c49e79bab8d8b.jpg",
            "title": "Managing Work-Life Balance",
            "description": "Find ways to balance work and personal life for better mental health."
          },
          {
            "id": 8,
            "img": "https://i.pinimg.com/originals/a2/df/98/a2df98ecb96aaf26615c49e79bab8d8b.jpg",
            "title": "Emotional Intelligence",
            "description": "Enhance your emotional intelligence skills for healthier relationships and self-awareness."
          },
          {
            "id": 9,
            "img": "https://i.pinimg.com/originals/a2/df/98/a2df98ecb96aaf26615c49e79bab8d8b.jpg",
            "title": "Positive Affirmations",
            "description": "Practice positive affirmations to boost self-esteem and reduce negative thoughts."
          },
          {
            "id": 10,
            "img": "https://i.pinimg.com/originals/a2/df/98/a2df98ecb96aaf26615c49e79bab8d8b.jpg",
            "title": "Art Therapy",
            "description": "Explore the therapeutic benefits of art to express and heal your emotions."
          },
          {
            "id": 11,
            "img": "https://i.pinimg.com/originals/a2/df/98/a2df98ecb96aaf26615c49e79bab8d8b.jpg",
            "title": "Sleep Hygiene",
            "description": "Learn about good sleep hygiene practices for improved mental and physical health."
          },
          {
            "id": 12,
            "img": "https://i.pinimg.com/originals/a2/df/98/a2df98ecb96aaf26615c49e79bab8d8b.jpg",
            "title": "Nutrition and Mental Health",
            "description": "Understand how diet can impact your mental health and make healthier food choices."
          },
          {
            "id": 13,
            "img":"https://i.pinimg.com/originals/a2/df/98/a2df98ecb96aaf26615c49e79bab8d8b.jpg",
            "title": "Managing Social Isolation",
            "description": "Discover strategies to combat social isolation and loneliness for better mental health."
          },
          {
            "id": 14,
            "img": "https://i.pinimg.com/originals/a2/df/98/a2df98ecb96aaf26615c49e79bab8d8b.jpg",
            "title": "Trauma Recovery",
            "description": "Get support and resources for healing from past traumas and PTSD."
          },
          {
            "id": 15,
            "img": "https://i.pinimg.com/originals/a2/df/98/a2df98ecb96aaf26615c49e79bab8d8b.jpg",
            "title": "Embracing Change",
            "description": "Learn to embrace change as a part of personal growth and mental resilience."
          },
          {
            "id": 16,
            "img": "https://i.pinimg.com/originals/a2/df/98/a2df98ecb96aaf26615c49e79bab8d8b.jpg",
            "title": "Mental Health First Aid",
            "description": "Gain knowledge and skills to provide first aid support for individuals facing mental health crises."
          }
      ];
  return (
    <>
        <FeaturedArticle articles = {articles_data} />
    </>
  )
}

export default Articles