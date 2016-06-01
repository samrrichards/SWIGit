#SWIGit

Welcome to SWIGit, an AngularJS blogging platform for the web development community... and anyone else looking to share their ideas! This guide is meant to walk you through the basics of how our app works, both from a UI/UX perspective and from a technical one. 

##Authentication

When you first load the SWIGit homepage, you'll see a brown key icon in the lower right corner. Hovering the mouse over that icon will reveal the authentication menu, which contains the *Sign Up* and *Sign On* buttons. The *Sign Up* button will redirect you to a template where you can create a SWIGit account and the *Sign On* button will redirect you to a template where you can sign in to the platform if you're an existing user. The Angular UI Router handles all our routing for this app. 

###Signing Up

Our sign up template contains four fields: Username, Full Name, Email, and Password. Fill in these fields and press enter on your keyboard to join SWIGit!

When you sign up for SWIGit, we store your information in our SQLite3 database, which we interact with using the excellent Knex.js/Bookshelf.js ORM. We use Bcrypt to hash your password before storing it in our database, to make sure that it stays extra safe. 

###Signing On

Signing on to SWIGit is pretty simple. Enter your username and password, press enter on your keyboard, and you're good to go! 

Instead of using cookies or Express sessions, we generate a unique JSON Web Token (JWT) for you whenever you sign in. This ensures that your posts are stored and displayed in the right place and gives you special access to the content you create using SWIGit. 

##Blogging

Once you've signed up or signed on, you'll see the SWIGit dashboard and will be redirected to the edit post template. This template will allow you to write new blog posts and contains four text fields: Title, Post URL, Tags, and Content.

The Title field is what it sounds like: a place for you to enter the title of a post. The Post URL field automatically generates a URL slug based on what's entered into the Title field. You can edit this slug if you'd like. The Tags field is for any tags you might want to give a post (like "ES2015" or "#nofilter"), while the Content field is where you'll write out the actual blog post. 

###Posting to SWIGit

When you're ready to submit a post, you can do using the post menu, which works a lot like the authentication menu. Just hover your mouse over the brown pencil icon in the lower right corner and the menu will pop up. Click the "POST" button (located in the middle of the row of icons that pop up) to post what you've written to your blog! 

To keep our database a manageable size (...insert obligatory SQLite3 joke here), we use Node.js to write your blog posts to .txt files, which are then stored in our server. We then store the path to the .txt file in our database, along with the rest of the information for the post and a brief excerpt from it. When we display a specific post, we write the content of the .txt file into the html template for that post. 

Thanks to the Angular-Marked library, we're able to display Markdown highlighting in posts, even though they're technically stored as .txt files instead of .md files. 

###Displaying posts

To see all your posts, along with excerpts from them, just click on the *Blog* button on the far left hand side of the SWIGit dashboard. This will take you to your unique feed, which aggregates and displays everything you post to SWIGit. Clicking on a post in your feed will redirect you to the post URL and enable you to view the entire post. 

If you want to put a link to your SWIGit blog on a personal website or share your blog with friends, just copy and paste the URL for your feed. This should be viewable even to those without a SWIGit account. The same goes for individual SWIGit posts. 

If you're struck by inspiration while looking at your feed and want to write a new post, click the *New Post* button in the SWIGit dashboard, located to the immediate right of the *Blog* button. This will take you to the same post edit template you saw when you logged in. 


###Editing posts 

You can edit and delete old posts easily, provided that you're logged in. To do so, go to your feed (using the *Blog* button) and hover over the post you want to edit or delete. An *Edit* icon and a *Delete* icon will appear; just click on the one representing the action you want to perform and you're ready to go! 

Clicking the *Delete* icon will remove the post from your feed and clicking the *Edit* icon will take you back to the edit post template, where you can make the necessary changes. Users viewing your blog who are not logged in with your credentials can't edit or delete your posts.

###Signing out 

If you hover over on the square *Account* button on the right hand side of the SWIGit dashboard, you'll see the account menu, which contains a *Profile* option, a *Portfolio* option, and a *Sign Out* option. You can probably guess which one will sign you out of SWIGit (and, in doing so, invalidate your current authentication token). ;) 

###User profiles 

We don't have our user profile feature entirely built out yet, but are hoping to implement it soon! In the meantime, if you click on the *Profile* option in the account menu, you'll be redirected to a placeholder profile template. 