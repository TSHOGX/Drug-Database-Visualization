import csv
import json

'''
pie data
{
	"name": {
		"id": "name",
		"2018": [
			{ "id": "Q1", "value": 453 },
		]
		"2019": []
	}	
}
'''

def make_json(csvFilePath, jsonFilePath):
	data = {}
	with open(csvFilePath, encoding='utf-8') as csvf:
		csvReader = csv.DictReader(csvf)

		for rows in csvReader:
			del rows['']
			rowDic = {}
			idName = rows['Concept_name']
			rowDic["id"] = idName
		    
		    # loop for each key,
			for i in range(2004, 2015): 
				rowDic[str(i)] = []
				# add this year's data
				for key in rows.keys():
					if key.startswith(str(i)[2:]):
						if rows[key] != '':
							rowDic[str(i)].append({"id": key[2:], "value": int(float(rows[key]))})
			
			data[idName] = rowDic

	with open(jsonFilePath, 'w', encoding='utf-8') as jsonf:
		jsonf.write(json.dumps(data, indent=2))
		
# Driver Code

# Decide the two file paths according to your
# computer system
csvFilePath = r'quarcnt.csv'
jsonFilePath = r'quarcnt.json'

# Call the make_json function
make_json(csvFilePath, jsonFilePath)

