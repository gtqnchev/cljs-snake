(ns snake.gui
  (:require [snake.logic :as logic]))

(def food-color [255 101 0])

(def snake-color [112 174 32])

(def scale-factor 10)

(def keycodes {37 :left
               38 :top
               39 :right
               40 :bottom})

(defn add-key-listeners [snake-state]
  (set!
   (.-onkeydown js/document)
   (fn [event]
     (if-let [direction (keycodes (.-keyCode event))]
       (swap! snake-state logic/turn direction)))))

(defn scale [x]
  (if (coll? x)
    (mapv (partial * scale-factor) x)
    (* scale-factor x)))

(defn get-canvas []
  (let [canvas (.getElementById js/document "canvas")]
    (.getContext canvas "2d")))

(defn clear-canvas [{:keys [width height]} board]
  (.clearRect board 0 0 (scale width) (scale height)))

(defn initialize-board [snake]
  (let [canvas (.getElementById js/document "canvas")]
    (.setAttribute canvas "width"  (scale (snake :width)))
    (.setAttribute canvas "height" (scale (snake :height)))))

(defn rgb [r g b]
  (str "rgb(" r "," g "," b ")"))

(defn draw-square [x y [r g b] board]
  (set! (. board -fillStyle) (rgb r g b))
  (.fillRect board (scale x) (scale y) scale-factor scale-factor)
  (set! (. board -fillStyle) (rgb r g b))
  (.strokeRect board (scale x) (scale y) scale-factor scale-factor))

(defn draw-squares [coordinates color board]
  (doseq [[x y] coordinates] (draw-square x y color board)))

(defn draw-board [snake]
  (let [board      (get-canvas)
        draw-food  #(draw-squares % food-color board)
        draw-snake #(draw-squares % snake-color board)]
    (clear-canvas snake board)
    (draw-food  (snake :prizes))
    (draw-snake (snake :location))))
