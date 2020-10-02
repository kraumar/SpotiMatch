# import sys, json, numpy as np, pandas as pd
import sys

print(sys.argv)


# def load_users_data(json1, json2):
#     data1 = pd.read_json(json1)
#     data2 = pd.read_json(json2)
    
#     data1 = data1.dropna(subset=['name'])
#     data2 = data2.dropna(subset=['name'])
    
#     columns1 = [c for c in data1.columns if c.lower()[:6] != 'genres' and c.lower() != 'type' and c.lower() != 'popularity' and c.lower()[:9] != 'followers']
#     columns2 = [c for c in data2.columns if c.lower()[:6] != 'genres' and c.lower() != 'type' and c.lower() != 'popularity' and c.lower()[:9] != 'followers']
    
#     data1 = data1[columns1]
#     data2 = data2[columns2]
    
#     iterated = [c for c in range(1,data1.shape[0] + 1)]
    
#     data1['personal_ranking'] = iterated
#     data2['personal_ranking'] = iterated
    
#     data1.reset_index(inplace=True)
#     data2.reset_index(inplace=True)
    
    
#     return data1, data2

#  def compare_dataframes(df1, df2):
    
#     total_rows1 = df1.shape[0]
#     df1['second_user_ranking'] = np.where(df1['name'] == df2['name'], df2['personal_ranking'] ,'None')
#     df1.drop(df1[df1.second_user_ranking == 'None'].index.values, inplace=True)
#     total_rows2 = df1.shape[0]
#     score = (total_rows2 / total_rows1)*100
    
#     return df1,score
    

# def read_in():

# 	data1 = json.loads(sys.argv[1])
# 	data2 = json.loads(sys.argv[2])

# 	return data1, data2


# def main():

#     print("hello")

# 	data1, data2 = read_in()
# 	data1, data2 = load_users_data(data1, data2)

# 	data_final, score = compare_dataframes(data1, data2)

# 	result = data_final.to_json(orient="split")

# 	for res in result:
# 		print(res)

# 	print(score)


# if __name__ == '__main__':
# 	main()


