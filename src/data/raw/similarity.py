import csv
import json

'''
node data
{
    "nodes": [
        {
            "id": "name row key",
            "info": "name",
            "neighbors": ["col key!=0","2"],
            "links": [
                { "source": "row key", "target": "col key", "weight": 0.2 },
                { "source": "col key", "target": "row key", "weight": 0.2 },
            ],
        },
    ]

    "links": [
        { "source": "row key", "target": "col key", "weight": 0.2 },
        { "source": "col key", "target": "row key", "weight": 0.2 },
    ]
}
'''

def make_json(csvFilePath, jsonFilePath):
    data = {"nodes": [], "links": []}
    idNameDict = {}
    with open(csvFilePath, encoding='utf-8') as csvf:
        csvReader = csv.DictReader(csvf)
        cnt = 1
        for rows in csvReader:
            idName = rows['']
            idNameDict[idName] = str(cnt)
            cnt += 1

    with open(csvFilePath, encoding='utf-8') as csvf:
        csvReader = csv.DictReader(csvf)
        for rows in csvReader:
            idName = rows['']        
            del rows['']
            rowDict = {}
            # rowDict["id"] = idNameDict[idName]
            rowDict["id"] = idName
            rowDict["info"] = idNameDict[idName]
            # rowDict["neighbors"] = []
            # rowDict["links"] = []
            
            # loop for each key,
            for key in rows.keys():
                if float(rows[key]) > 0.7:
                    # rowDict["neighbors"].append(idNameDict[key])
                    # rowDict["links"].append({"source": idNameDict[idName], "target": idNameDict[key], "weight": float(rows[key])})
                    # data["links"].append({"source": idNameDict[idName], "target": idNameDict[key]})
                    data["links"].append({"source": idName, "target": key})
            data["nodes"].append(rowDict)

    with open(jsonFilePath, 'w', encoding='utf-8') as jsonf:
        jsonf.write(json.dumps(data, indent=2))
        
# Driver Code

# Decide the two file paths according to your
# computer system
csvFilePath = r'similarity.csv'
jsonFilePath = r'similarity.json'

# Call the make_json function
make_json(csvFilePath, jsonFilePath)

