export default function NewsDetail({ detail, handleBack }) {
  return (
    <div className="news-detail-container">
      <button onClick={() => handleBack()} className="back-button">Back</button>
      <h1 className="news-detail-title">{detail.title}</h1>
      <p className="date">{detail.date}</p>
      <p className="author">{detail.author}</p>
      <p className="tags">
        {detail.categories.map((item, index) => {
          return <span className="tag" key={index}>{item}</span>;
        })}
      </p>
      <div className="article-detail">
        {detail.content.map((item, index) => {
          if (item.startsWith("http")) {
            if (item.includes("youtube.com") || item.includes("youtu.be")) {
              return <div className="flex-center" key={index} ><iframe src={item}></iframe></div>;
            } else if (item.match(/\.(jpeg|jpg|png|gif)$/)) {
              return<div className="flex-center" key={index} ><img key={index} src={item} alt="img" /></div>;
            } else {
              return (
                <a key={index} href={item}>
                  {item}
                </a>
              );
            }
          } else {
            return <p key={index}>{item}</p>;
          }
        })}
      </div>
    </div>
  );
}
