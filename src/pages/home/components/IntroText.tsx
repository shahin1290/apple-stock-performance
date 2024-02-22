const IntroText = () => {
  return (
    <div>
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Apple Stock React To News Articles Count
      </h1>
      <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
        This Data Visualization app provide a dynamic chart that visually
        represents the relationship between the count of news articles and the
        stock price for Apple. This app uses stock market historical for Apple
        from 2023-05-01 to 2023-09-30 and new articles counts for the same
        period{" "}
      </p>
    </div>
  );
};

export default IntroText;
