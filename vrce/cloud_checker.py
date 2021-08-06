import csv
#This script reads generated consumer data, analyzes the deployment's usage, and switches cloud type if necessary.

name_list = []
user_id_list = []
cloud_type_list = []
cpu_usage_list = []
memory_usage_list = []

#read data from file
with open('consumer_data.csv', 'r') as file:
	reader = csv.reader(file)
	#note data convention: Name, User ID, Cloud Type, CPU usage, Memory Usage
	for line in reader:
		#add each line data to its related array
		name_list.append(line[0])
		user_id_list.append(line[1])
		cloud_type_list.append(line[2])
		cpu_usage_list.append(line[3])
		memory_usage_list.append(line[4])
	print("Finished Reading Consumer Data.")

#rewrite data to file
with open('consumer_data.csv', 'w', newline='') as file:
	writer = csv.writer(file)

	counter = 0 #keep track of data lines processed to find end of data
	while counter != len(name_list):
		#compare total usage with cloud range: 
		#public cloud: 100 and below
		#private cloud: 101 and above
		total_usage = int(cpu_usage_list[counter]) + int(memory_usage_list[counter])

		if total_usage <= 100:
			#check cloud type is set to Public
			if cloud_type_list[counter] == "Public":
				#keep original data as is
				writer.writerow([name_list[counter], user_id_list[counter], cloud_type_list[counter], cpu_usage_list[counter], memory_usage_list[counter]])
				print(name_list[counter] + " - Kept in Public Cloud")
			else: #case: cloud type listed as private, so transition to public cloud
				#update cloud type
				writer.writerow([name_list[counter], user_id_list[counter], "Public", cpu_usage_list[counter], memory_usage_list[counter]])
				print(name_list[counter] + " - Moved to Public Cloud")
		else: #case: total_usage > 100:
			#check cloud type is set to Private
			if cloud_type_list[counter] == "Private":
				#keep original data as is
				writer.writerow([name_list[counter], user_id_list[counter], cloud_type_list[counter], cpu_usage_list[counter], memory_usage_list[counter]])
				print(name_list[counter] + " - Kept in Private Cloud")
			else: #case: cloud type listed as public, so transition to private cloud
				#update cloud type
				writer.writerow([name_list[counter], user_id_list[counter], "Private", cpu_usage_list[counter], memory_usage_list[counter]])
				print(name_list[counter] + " - Moved to Private Cloud")
		counter+=1
	print("Finished Updating Consumer Data.")
