import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

const creatFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
   { create: creatFeedbackSpy },
   { sendMail: sendMailSpy }
)

describe('Submit feedback', () => {
   it('should be able to submit a feedback', async () => {
      await expect(submitFeedback.execute({
         type: 'BUG',
         comment: 'example comment',
         screenshot: 'data:image/png;base6456f4sa6asdas',
      })).resolves.not.toThrow();

      expect(creatFeedbackSpy).toHaveBeenCalled();
      expect(sendMailSpy).toHaveBeenCalled();
   });

   it('should not be able to submit a feedback without type', async () => {
      await expect(submitFeedback.execute({
         type: '',
         comment: 'example comment',
         screenshot: 'data:image/png;base64,56f4sa6asdas',
      })).resolves.toThrow();
   });


   it('should not be able to submit a feedback without comment', async () => {
      await expect(submitFeedback.execute({
         type: 'BUG',
         comment: '',
         screenshot: 'data:image/png;base64,56f4sa6asdas',
      })).resolves.toThrow();
   });

   it('should not be able to submit a feedback with an invalid screenshot', async () => {
      await expect(submitFeedback.execute({
         type: 'BUG',
         comment: 'ta tudo bugado',
         screenshot: 'test.jpg',
      })).resolves.toThrow();
   });
});