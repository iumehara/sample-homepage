class PostsController < ApplicationController
	respond_to :json

	def index
		posts = Post.all
		respond_with(posts) do |format|
			format.json { render json: posts.as_json }
		end
	end

	def create
		post = Post.new(post_params)
		respond_to do |format|
			if post.save
				format.json { render json: post.as_json}
			else
				format.html { render 'public/422', status: 422 }
			end
		end
	end

	private

		def post_params
			params.require(:post).permit(:title, :contents)
		end

end
