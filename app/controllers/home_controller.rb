class HomeController < ApplicationController
  def index
    @posts = Post.paginate(page: params[:page], per_page: 6)
  end

  def about
  end
  def load_more
    last_id = params[:last_id].to_i
    @posts = Post.where("id > ?", last_id).limit(6)
  
    respond_to do |format|
      format.html { render partial: "posts", locals: { posts: @posts } }
    end
  end
  

end




