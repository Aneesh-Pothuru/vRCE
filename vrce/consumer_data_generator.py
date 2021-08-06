import csv
import random
#This script mimics consumer data by utilizing random number generator. 
with open('consumer_data.csv', 'w', newline='') as file:
	writer = csv.writer(file)
	# i represents value for each User ID
	for i in range(1,10+1): #creates 10 User IDs
		# j represents value for number of deployments under User ID
		for j in range(1,10+1): #creates 10 deployments for each User ID
			cpu_usage = random.randint(0,100)
			memory_usage = random.randint(0,100)
			cloud_identifier = random.randint(1,2) #randomly determine the cloud type of deployment

			if cloud_identifier == 1: # Let 1 symbolize public cloud
				writer.writerow(["Name:"+str(i)+"-"+str(j), i, "Public", cpu_usage, memory_usage])
			else: #case: cloud_identifier == 2, Let 2 symbolize private cloud
				writer.writerow(["Name:"+str(i)+"-"+str(j), i, "Private", cpu_usage, memory_usage])

	print("Finished Generating Consumer Data.")