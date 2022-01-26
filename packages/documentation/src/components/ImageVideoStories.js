import React from 'react';
import Stories from '@react-instagram/stories';
import '@react-instagram/stories/dist/index.css';

export default function ImageVideoStories() {
  const stories = [
    {
      type: 'image',
      duration: 6000,
      url: 'https://images.pexels.com/photos/9733197/pexels-photo-9733197.jpeg?w=300',
    },
    {
      type: 'video',
      url: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4',
      duration: 5000,
    },
    {
      type: 'image',
      duration: 6000,
      url: 'https://images.pexels.com/photos/9733197/pexels-photo-9733197.jpeg?w=300',
    },
    {
      duration: 90000,
      type: 'video',
      url: 'https://jsoncompare.org/LearningContainer/SampleFiles/Video/MP4/Sample-MP4-Video-File-Download.mp4',
    },
    {
      duration: 7000,
      type: 'image',
      url: 'https://images.pexels.com/photos/9470805/pexels-photo-9470805.jpeg?w=300',
    },
  ];
  return (
    <div style={{display:'flex', justifyContent:'center',width:'100%', marginBottom:'16px'}}>
      <Stories
        width="400px"
        height="600px"
        stories={stories}
      />
    </div>
  );
}

