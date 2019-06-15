movies = {
  minions: 4,
  }

puts "What would you like to do?"
choice = gets.chomp

case choice
  when "add"
    puts "What movie would you like to add?"
    title = gets.chomp
 	  	if movies[title.to_sym] == nil
  		  puts "What rating would you like to give #{title}?"
    		rating = gets.chomp
				movies[title.to_sym] = rating.to_i
    		puts "#{title} was added with a rating of #{rating}"
      else
        puts "Movie already exists."
      end
  when "update"
  	puts "Which title would you like to update?"
  	title = gets.chomp
  		if movies[title.to_sym] == nil
        puts "Movie doesn't exist yet"
      else
        puts "What rating would you like to give #{title}?"
        rating = gets.chomp
        movies[title.to_sym] = rating.to_i
    		puts "#{title} was updated with a rating of #{rating}"
      end
  when "display"
		movies.each {|movie, rating|
      puts "#{movie}: #{rating}"
      }
  when "delete"
  	puts "Which movie would you like to delete?"
  	title = gets.chomp
  	if movies[title.to_sym] == nil
        puts "Movie doesn't exist"
    else
      movies.delete(title)
      puts "#{title} was sucessfully deleted."
    end
else
  puts "Error!"
end


=begin
A NIGHT AT THE MOVIES
What You'll Be Building
Keeping track of all the parts of our digital lives is a pain. Now that you know how to write Ruby, however, you can make things easy for yourself! Let's start by creating a program that will keep track of our movie ratings.

It'll do one of four things: add a new movie to a hash, update the rating for an existing movie, display the movies and ratings that are already in the hash, or delete a movie from the hash. If it doesn't receive one of those four commands, the program will output some kind of error message.

This project will give you a lot of room for creativity, but we know sometimes it can be a little disorienting to not have strict instructions. If you ever feel lost, don't hesitate to check out the example code in this exercise to help you along!
=end
