import csv
import json

'''
line data
[
    {
        "id": "name",
        "data": [
            { x: '2018', y: 7 },
        ]
    }
]
'''

def make_json(csvFilePath, jsonFilePath):
	data = []
	with open(csvFilePath, encoding='utf-8') as csvf:
		csvReader = csv.DictReader(csvf)

		for rows in csvReader:
			del rows['']
			idName = rows['Concept_name']
			rowList = {}
			rowList['id'] = idName
			rowList['data'] = []
		    
		    # loop for each key,
			for i in range(2004, 2015): 
				# add this year's data
				for key in rows.keys():
					if key.startswith(str(i)[2:]):
						if rows[key] != '':
							rowList['data'].append({"x": i, "y": int(float(rows[key]))})
			
			data.append(rowList)

	with open(jsonFilePath, 'w', encoding='utf-8') as jsonf:
		jsonf.write(json.dumps(data, indent=2))
		
# Driver Code

# Decide the two file paths according to your
# computer system
csvFilePath = r'yearcnt.csv'
jsonFilePath = r'yearcnt.json'

# Call the make_json function
make_json(csvFilePath, jsonFilePath)

