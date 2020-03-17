# ASSESSMENT 6: Rails Commenting Challenge
# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# app/controller/blog_posts_controller.rb

# 1) this is a controller that houses the index (id) of the model
class BlogPostsController < ApplicationController
  def index
    # 2) this deletegates all blogposts in the model to be housed in "index"
    @posts = BlogPost.all
  end

  def show
    # 3) this finds the id of the blogspot u want to display.
    @post = BlogPost.find(params[:id])
  end

  # 4) this doesn't do anything.
  def new
  end

  def create
    # 5)this creates a new blog post, if the post meets certain criteria.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to @post
    else
      render action: :new
    end
  end

  def delete
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # 6)this redirects to the mainpain after deleteing an instance.
      redirect_to blog_post_path(@post)
    end
  end

  # 7)this makes something private so you can't see it with inspect in browser.
  private
  def blog_post_params
    # 8) this designates the required perameters when creating a new post
    params.require(:blog_post).permit(:title, :content)
  end

end


# app/models/blog_post.rb

# 9)this is the key
class BlogPost < ApplicationRecord
  # 10)
  has_many :comments
end
