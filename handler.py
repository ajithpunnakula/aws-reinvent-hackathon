import json
import datetime
import psycopg2
import os

# rds settings
# rds_host = os.environ['RDS_HOST']
# name = os.environ['RDS_USERNAME']
# password = os.environ['RDS_PASSWORD']
# db_name = os.environ['RDS_DB_NAME']

rds_host = 'gwchackathon.c48swfomgrhl.us-east-2.rds.amazonaws.com'
name = 'administrator'
password = 'H3ll0123'
db_name = 'GWCdb'

conn = None


def openConnection():
    global conn
    try:
        # print("Opening Connection")
        if (conn is None):
            conn = psycopg2.connect(
                host=rds_host, user=name, password=password, database=db_name)
        elif (not conn.open):
            # print(conn.open)
            conn = psycopg2.connect(
                host=rds_host, user=name, password=password, database=db_name)

    except Exception as e:
        print(e)
        print("ERROR: Unexpected error: Could not connect to postgresql instance.")
        raise e


def testdatabase(event, context):
    try:
        # insert test data in RDS instance
        openConnection()

        with conn.cursor() as cur:
            # create table
            cur.execute('SELECT * from public.test_table')
            print("The number of parts: ", cur.rowcount)
            row = cur.fetchone()
            body = {
                "message": "Hello, the db version is " + str(row)
            }

            response = {
                "statusCode": 200,
                "body": json.dumps(body)
            }
    except Exception as e:
        # Error while opening connection or processing
        print(e)

    finally:
        if conn is not None:
            conn.close()

    return response


def get_volunteer_stats(event, context):
    rmid = 12
    location = 'global'

    body = {
        'engaged': 10,
        'interested': 24
    }


    response = {
        "statusCode": 200,
        "body": json.dumps(body)
    }

    return response


def get_currentactivity_stats(event, context):
    rmid = 12
    location = 'global'

    body = {
        'items': [
            {
                'school': 35,
                'alert': True
            },
            {
                'library': 50,
                'alert': False
            }
        ]
    }

    response = {
        "statusCode": 200,
        "body": json.dumps(body)
    }

    return response


def get_availableopps_stats(event, context):
    rmid = 12
    location = 'global'

    body = {
        'ready': 10,
        'notReady1': 6,
        'notReady2': 8
    }


    response = {
        "statusCode": 200,
        "body": json.dumps(body)
    }

    return response


def endpoint(event, context):
    current_time = datetime.datetime.now().time()
    body = {
        "message": "Hello, the current time is " + str(current_time)
    }

    response = {
        "statusCode": 200,
        "body": json.dumps(body)
    }

    return response


def opportunities(event, context):
    try:
        # insert test data in RDS instance
        openConnection()

        with conn.cursor() as cur:
             # create table
             cur.execute('SELECT * from public.test_table')
             print("The number of parts: ", cur.rowcount)
             row = cur.fetchone()
             body = {
                 "message": "Hello, the db version is " + str(row)
             }

             response = {
                 "statusCode": 200,
                 "body": json.dumps(body)
             }
    except Exception as e:
        # Error while opening connection or processing
        print(e)

    finally:
        if conn is not None:
            conn.close()

    sampleoutput = json.dumps({
    'output' : [
        {'schoolname': 'Heartschool', 'status' : 'ready',  'updateddate': '2018-11-20'},
        {'schoolname': 'littleschool', 'status': 'ready', 'updateddate': '2018-11-26'}
    ]
    }
    )
    #{ [{schoolname: middle school, status: ready,  updateddate: 2018-11-20 }, {schoolname: middle 2 school, status: ready,  updateddate: 2018-11-20 } ] }
    response = {
                 "statusCode": 200,
                 "body": sampleoutput
             }
    return response


def opportunitiesmatch(event, context):
    try:
        # insert test data in RDS instance
        openConnection()

        with conn.cursor() as cur:
             # create table
             cur.execute('SELECT * from public.test_table')
             print("The number of parts: ", cur.rowcount)
             row = cur.fetchone()
             body = {
                 "message": "Hello, the db version is " + str(row)
             }

             response = {
                 "statusCode": 200,
                 "body": json.dumps(body)
             }
    except Exception as e:
        # Error while opening connection or processing
        print(e)

    finally:
        if conn is not None:
            conn.close()

    sampleoutput = json.dumps({
    'output' : [
        {'schoolname': 'Heartschool', 'status' : 'ready',  'updateddate': '2018-11-20', 'numvol': 4, 'volemaillist':['1@acc.com', '2@acc.com']},
        {'schoolname': 'littleschool', 'status': 'ready', 'updateddate': '2018-11-26', 'numvol': 1, 'volemaillist':['3@acc.com', '4@acc.com']}
    ]
    }
    )
    #{ [{schoolname: middle school, status: ready,  updateddate: 2018-11-20 }, {schoolname: middle 2 school, status: ready,  updateddate: 2018-11-20 } ] }
    response = {
                 "statusCode": 200,
                 "body": sampleoutput
             }
    return response

