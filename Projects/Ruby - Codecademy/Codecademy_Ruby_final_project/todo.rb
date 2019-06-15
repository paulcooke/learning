#Modules

module Menu
  def menu
    #puts "Welcome to the amazing todo list program!"
    puts "What would you like to do?"
    puts "1) Add"
    puts "2) Show"
    puts "3) Write to a file"
    print "Q) Quit the program"
  end
  def show
    menu
  end
end # end for module Menu

module Promptable
  def prompt (message="What would you like to do?", symbol=":> ")
    puts message
    print symbol
    gets.chomp
  end
end # end for module Promptable

#Classes

class List
  attr_reader :all_tasks
  def initialize
    @all_tasks = []
  end
  def add (task)
    all_tasks.push(task)
    puts "#{task} successfully added to your list"
  end
  def show
    all_tasks
  end
  def write_to_file (filename)
    
  end
end #end for List class

class Task
  attr_reader :description
  def initialize (description)
    @description = description
    alias to_s description
  end
  def to_s
    description
  end
end #end for Task class

# code to run the program
if __FILE__ == $PROGRAM_NAME
  include Menu, Promptable
  my_list = List.new

    until ['q'].include?(user_input = prompt(show).downcase)
      case user_input
      when "1"
          #something about the next line makes it hard to read the task back out of the array -- solved, alias to_s description added to class Task. From someone on stackoverflow with the same problem in the same exercise.
          my_list.add(Task.new(prompt("What task would you like to add?")))
      when "2"
          if my_list.all_tasks.length == 0
            puts "Your list is empty"
          else
            puts "Here is your current list:"
            puts my_list.show
          end
      else
        puts "Mooman Rider here. Your command was not understood, please try again"
      end # for case
    end # for until
    puts "That was really fun - thanks for using the menu system!"
end # for program runner

=begin
puts 'You have created a new list'
my_list.add('Hoover living room')
puts 'You have added a task to the todo list'
my_list.add('Clean toilet')
puts 'You have added a task to the todo list'
puts my_list.show
=end
