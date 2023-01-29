FROM python:3.6
ENV PYTHONUNBUFFERED 1
# Set the working directory to /app

WORKDIR /app

# copy the requirements file used for dependencies
COPY requirements.txt .

# Install any needed packages specified in requirements.txt
RUN pip install -r requirements.txt

# Copy the rest of the working directory contents into the container at /app
COPY . .

# Run app.py when the container launches
CMD python manage.py runserver 0.0.0.0:80