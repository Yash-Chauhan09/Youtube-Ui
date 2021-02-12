import React from "react";
import Recommended from "./Recommended";
import VideoCard from "./VideoCard";
import "./Videos.css";
function Videos() {
  return (
    <div className="videos">
      <hr />
      <div className="videos__recommended">
        <Recommended selected title="All" />
        <Recommended title="JavaScript" />
        <Recommended title="React" />
        <Recommended title="Node js" />
        <Recommended title="Rap Music" />
        <Recommended title="Coding" />
      </div>
      <hr />
      <div className="videos__video">
          <VideoCard
          title='How to become a developer in 3 months |'
          views="1.5M views"
          timestamp="1 day ago"
          channel= "Code with Yash"
          channelImage='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZBBt36PJlCUq7uKMZJyHJWjvvb3lhqJgMow&usqp=CAU'
          image='https://miro.medium.com/max/300/1*t_2uLwKiZdMDF5z9iwUuhA.png'
          />
          <VideoCard
          title='Meet the highest paid ceo of the world  |'
          views="5M views"
          timestamp="5 day ago"
          channel= "FactsTv"
          channelImage='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQlFCsAqpl0YNl-GJVbsUSbourQDT5rw8fjg&usqp=CAU'
          image='https://cnet1.cbsistatic.com/img/8VY3RIq4x3qYImFuHr6DaVUHAzo=/940x0/2020/12/22/3da9d316-8ee4-4d30-86ef-847728e1112e/gettyimages-1229893385.jpg'
          />
          <VideoCard
          title='Never stop believing in yourself!!|'
          views="125K views"
          timestamp="5 hours ago"
          channel= "Motivational Stuff"
          channelImage='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToKq3AQUex6koHuPbw_IfDH5heJveIZedjMw&usqp=CAU'
          image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKPSdPpKoF-9aeYOcrQcSgUXwXCJwDQao6ug&usqp=CAU'
          />
          <VideoCard
          title='Best phones of this decade part 1 |'
          views="2.1M views"
          timestamp="7 day ago"
          channel= "Mobile World"
          channelImage='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMyRweAqkl2pfKzK98j-vNzyoPEmBfXdH0JA&usqp=CAU'
          image='https://fdn.gsmarena.com/imgroot/news/19/12/phones-of-the-decade/-727w2/gsmarena_001.jpg'
          />
          <VideoCard
          title='How to count bars in Rap music...|'
          views="200K views"
          timestamp="4 day ago"
          channel= "Rapperz"
          channelImage='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi4vewwK7UUjX7PjQw2UJZxjjtVChne9h0Nw&usqp=CAU'
          image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc-6vXVfAs8mlOGUmvPACt-EWGwPUe4E4K9A&usqp=CAU'
          />
          <VideoCard
          title='How to become a developer in 3 months |'
          views="1.5M views"
          timestamp="1 day ago"
          channel= "Code with Yash"
          channelImage='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZBBt36PJlCUq7uKMZJyHJWjvvb3lhqJgMow&usqp=CAU'
          image='https://miro.medium.com/max/300/1*t_2uLwKiZdMDF5z9iwUuhA.png'
          />
          <VideoCard
          title='Meet the highest paid ceo of the world  |'
          views="5M views"
          timestamp="5 day ago"
          channel= "FactsTv"
          channelImage='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQlFCsAqpl0YNl-GJVbsUSbourQDT5rw8fjg&usqp=CAU'
          image='https://cnet1.cbsistatic.com/img/8VY3RIq4x3qYImFuHr6DaVUHAzo=/940x0/2020/12/22/3da9d316-8ee4-4d30-86ef-847728e1112e/gettyimages-1229893385.jpg'
          />
          <VideoCard
          title='Never stop believing in yourself!!|'
          views="125K views"
          timestamp="5 hours ago"
          channel= "Motivational Stuff"
          channelImage='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToKq3AQUex6koHuPbw_IfDH5heJveIZedjMw&usqp=CAU'
          image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKPSdPpKoF-9aeYOcrQcSgUXwXCJwDQao6ug&usqp=CAU'
          />
          <VideoCard
          title='Best phones of this decade part 1 |'
          views="2.1M views"
          timestamp="7 day ago"
          channel= "Mobile World"
          channelImage='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMyRweAqkl2pfKzK98j-vNzyoPEmBfXdH0JA&usqp=CAU'
          image='https://fdn.gsmarena.com/imgroot/news/19/12/phones-of-the-decade/-727w2/gsmarena_001.jpg'
          />
          <VideoCard
          title='How to count bars in Rap music...|'
          views="200K views"
          timestamp="4 day ago"
          channel= "Rapperz"
          channelImage='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi4vewwK7UUjX7PjQw2UJZxjjtVChne9h0Nw&usqp=CAU'
          image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc-6vXVfAs8mlOGUmvPACt-EWGwPUe4E4K9A&usqp=CAU'
          />
          
      </div>
    </div>
  );
}

export default Videos;
