(ns snake.game
  (:require [snake.logic :as logic]
            [snake.gui   :as gui  ]))

(def speed 150)
(def board-size 30)
(def initial-snake {:dir [1 0]
                    :width board-size
                    :height board-size
                    :prizes #{[(rand-int board-size) (+ 2 (dec (rand-int board-size)))] }
                    :location [[1 1] [2 1] [3 1]]})

(def snake (atom initial-snake))

(defn play []
  (if @snake
    (do
      (snake.gui/draw-board @snake)
      (js/setTimeout #(play (swap! snake logic/move)) speed))
    (js/alert "GAME OVER")))

(defn ^:export start []
  (snake.gui/initialize-board @snake)
  (snake.gui/add-key-listeners snake)
  (play))