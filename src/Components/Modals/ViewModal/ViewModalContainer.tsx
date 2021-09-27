import answer from "Api/answer";
import improvement from "Api/improvement";
import { useState, useEffect } from "react";

const useGetModalValue = (idx: number, state: string) => {
  const [Idx, title, content] =
    state === "improvment"
      ? GetImprovmentValue(idx || 0)
      : GetAnswerValue(idx || 0);

  return [Idx, title, content];
};

const GetAnswerValue = (idx: number) => {
  const [Idx, setIdx] = useState("");
  const [title, setTitle] = useState("");
  const [Content, setContent] = useState("");

  const tryGet = async () => {
    try {
      const res = await answer.getAnswer(idx);
      return res.data;
    } catch (e) {
      alert("에러가 발생하였습니다. 개발팀에 문의해주세요.");
      console.log(e);
    }
  };

  useEffect(() => {
    tryGet().then((res) => {
      setIdx(res.data.answerIdx);
      setTitle(res.data.title);
      setContent(res.data.answerContent);
    });
  }, []);

  return [Idx, title, Content];
};

const GetImprovmentValue = (idx: number) => {
  const [Idx, setIdx] = useState("");
  const [improveHeader, setImproveHeader] = useState("");
  const [improveContent, setImproveContent] = useState("");
  const idxCopy = idx.toString();

  const tryGet = async () => {
    try {
      const res = await improvement.viewImprovment();

      return await res.data.list.filter(
        (data: { improveIdx: string }) => data.improveIdx === idxCopy
      );
    } catch (e) {
      alert("에러가 발생하였습니다. 개발팀에 문의해주세요.");
      console.log(e);
    }
  };

  useEffect(() => {
    tryGet().then((res) => {
      setIdx(res[0].improveIdx);
      setImproveHeader(res[0].improveHeader);
      setImproveContent(res[0].improveContent);
    });
  }, []);

  return [Idx, improveHeader, improveContent];
};

export default useGetModalValue;
