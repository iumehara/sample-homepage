require 'rails_helper'

describe "Default Page" do

	it "should have default text", js: true do
		visit root_path
		expect(page).to have_content "umehara.io"
	end

end
