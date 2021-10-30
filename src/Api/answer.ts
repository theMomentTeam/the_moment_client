import { AnswerController } from "./../Utils/Libs/requestUrls";
import RequestApi from "Utils/Libs/requestApi";
import { Method } from "axios";

class Answer {
  updateAnswer(
    content: string,
    answerIdx: number,
  ) {
    try {
      const data = {
        content,
      };
      return RequestApi(
        {
          method: "PUT",
          url: AnswerController.detailAnswer(answerIdx),
          data: data,
        },
        {
          hasToken: true,
        },
      );
    } catch (e) {
      throw new Error(e);
    }
  }

  saveAnswer(
    content: string,
    uncomfortableIdx: number,
  ) {
    try {
      const data = {
        content,
      };
      return RequestApi(
        {
          method: "POST",
          url: AnswerController.detail2Answer(uncomfortableIdx),
          data: data,
        },
        {
          hasToken: true,
        },
      );
    } catch (e) {
      throw new Error(e);
    }
  }

  deleteAnswer(answerIdx: number) {
    try {
      return RequestApi(
        {
          method: "DELETE",
          url: AnswerController.detailAnswer(answerIdx),
        },
        {
          hasToken: true,
        },
      );
    } catch (e) {
      throw new Error(e);
    }
  }

  getAnswer(answerIdx: number) {
    try {
      return RequestApi({
        method: "GET",
        url: AnswerController.detailAnswer(answerIdx),
      });
    } catch (e) {
      throw new Error(e);
    }
  }
}

export default new Answer();
