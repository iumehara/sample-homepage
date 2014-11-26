class FeedbacksMailer < ActionMailer::Base

  default from: "zo@umehara.io"
  default to: "zo@umehara.io"

  def new_feedback(feedback)
  	@feedback = feedback
  	mail(subject: "feedback:#{feedback.subject}")
  end
end
