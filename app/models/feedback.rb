class Feedback
	include ActiveModel::Validations
	include ActiveModel::Conversion
	extend ActiveModel::Naming

	attr_accessor :name, :email, :subject, :content

	validates_presence_of :name, :content, :email

  validates :email, allow_blank: true, format: { with: VALID_EMAIL_REGEX }

	validates_length_of :content, maximum: 500

	def initialize(attributes = {})
		attributes.each do |name, value|
			send("#{name}=", value)
		end
	end

	def persisted?
		false
	end

end
