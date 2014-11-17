class FeedbacksController < ApplicationController

	def create
		@feedback = Feedback.new(feedback_params)
		respond_to do |format|
			if @feedback.valid?
				# FeedbacksMailer.new_feedback(@feedback).deliver
				format.json { render json: @feedback.as_json }
			else
				format.json { render json: @feedback.errors.full_messages.as_json }
			end
		end
	end

	def template
	end

	private

		def feedback_params
			params.require(:feedback).permit(:subject, :name, :email, :content)
		end

end
