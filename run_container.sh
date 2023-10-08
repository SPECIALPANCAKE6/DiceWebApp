docker run -it --entrypoint=/bin/bash -p 80:80 \
            --net=host \
            --name="dice-game_local" \
            specialpancake6/dicewebapp:10-7-2023_1