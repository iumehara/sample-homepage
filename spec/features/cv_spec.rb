require 'rails_helper'

describe "CV Page" do

	it "should have job info", js: true do
		visit "http://localhost:3000/#/cv"
		expect(page).to have_content "ichizo umehara"
		expect(page).to have_content "It's On Me"
		expect(page).to have_content "shokuget.com"
		expect(page).to have_content "daidake.com"
		expect(page).to have_content "Simon-Kucher & Partners"
		expect(page).to have_css "img.service-icons", minimum: 16
		expect(page).to have_css "img.screenshot", minimum: 4
		expect(page).to have_css "footer"
	end

end

