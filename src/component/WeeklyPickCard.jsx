const WeeklyPickCard = ({ number, title, author, date, readTime }) => {
    return (
      <div className="flex items-start gap-4 mb-6">
        <span className="text-2xl font-bold text-gray-400">{number}</span>
        <div>
          <h4 className="font-semibold text-md">{title}</h4>
          <p className="text-sm text-gray-600">
            {author} <span className="font-semibold">in OneZero</span>
          </p>
          <p className="text-sm text-gray-600">
            {date} {readTime} <span className="font-bold text-black">★</span>
          </p>
        </div>
      </div>
    );
  };
  
  
  export default WeeklyPickCard;
  