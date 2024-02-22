import { NewsArticles } from "../types/NewsData";
import * as newsArticles from "../../public/data2023.json";
import { GenericObject } from "../types/Home";

const useGetNewsDataObj = () => {
  const articles = newsArticles as NewsArticles;

  const newsDateArray = articles.hits.hits.map((hit) =>
    hit._source.DateTime.slice(0, 10)
  );

  const dateWithNewsCount: GenericObject = {};

  for (const newsDate in newsDateArray)
    dateWithNewsCount[new Date(newsDateArray[newsDate]).getTime().toString()] =
      (dateWithNewsCount[new Date(newsDateArray[newsDate]).getTime()] || 0) + 1;

  return dateWithNewsCount;
};

export default useGetNewsDataObj;
